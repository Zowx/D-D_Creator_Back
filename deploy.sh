#!/bin/bash

# Script de déploiement pour D&D Creator Backend
# Usage: ./deploy.sh [options]

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonctions utilitaires
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Fonction d'aide
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Déploie l'application D&D Creator Backend avec Docker"
    echo ""
    echo "OPTIONS:"
    echo "  --fresh-db          Reset database (WARNING: deletes all data)"
    echo "  --no-cache          Build images without using cache"
    echo "  --logs              Show logs after deployment"
    echo "  --help              Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                    # Deploy normally"
    echo "  $0 --fresh-db         # Deploy with fresh database"
    echo "  $0 --no-cache         # Rebuild everything from scratch"
}

# Variables par défaut
NO_CACHE=false
FRESH_DB=false
SHOW_LOGS=false

# Analyse des arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --no-cache)
            NO_CACHE=true
            shift
            ;;
        --fresh-db)
            FRESH_DB=true
            shift
            ;;
        --logs)
            SHOW_LOGS=true
            shift
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            log_error "Option inconnue: $1"
            show_help
            exit 1
            ;;
    esac
done

# Vérification des prérequis
check_prerequisites() {
    log_info "Vérification des prérequis..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker n'est pas installé"
        exit 1
    fi
    
    if ! command -v docker compose &> /dev/null; then
        log_error "Docker Compose n'est pas installé"
        exit 1
    fi
    
    log_success "Prérequis validés"
}

# Configuration de l'environnement
setup_environment() {
    log_info "Configuration de l'environnement de développement"
    
    if [[ ! -f ".env" ]]; then
        log_warning "Fichier .env non trouvé, copie depuis .env.example"
        cp .env.example .env
    fi
}

# Reset de la base de données
reset_database() {
    if [[ "$FRESH_DB" == true ]]; then
        log_warning "Reset de la base de données..."
        read -p "Êtes-vous sûr de vouloir supprimer toutes les données ? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            docker compose down -v
            docker volume prune -f
            log_success "Base de données réinitialisée"
        else
            log_info "Reset annulé"
        fi
    fi
}

# Construction des images
build_images() {
    log_info "Construction des images Docker..."
    
    BUILD_ARGS=""
    if [[ "$NO_CACHE" == true ]]; then
        BUILD_ARGS="--no-cache"
    fi
    
    if docker compose build $BUILD_ARGS; then
        log_success "Images construites avec succès"
    else
        log_error "Échec de la construction des images"
        exit 1
    fi
}

# Démarrage des services
start_services() {
    log_info "Démarrage des services..."
    
    if docker compose up -d; then
        log_success "Services démarrés"
    else
        log_error "Échec du démarrage des services"
        exit 1
    fi
    
    # Attente que les services soient prêts
    log_info "Attente que les services soient prêts..."
    sleep 10
    
    # Vérification de l'état des services
    docker compose ps
}

# Migration de la base de données
run_migrations() {
    log_info "Exécution des migrations Prisma..."
    
    if docker compose exec app pnpm prisma migrate deploy; then
        log_success "Migrations exécutées avec succès"
    else
        log_warning "Erreur lors des migrations (normal si c'est le premier déploiement)"
    fi
}

# Affichage des logs
show_logs() {
    if [[ "$SHOW_LOGS" == true ]]; then
        log_info "Affichage des logs..."
        docker compose logs -f
    fi
}

# Affichage des informations de déploiement
show_deployment_info() {
    log_success "Déploiement terminé !"
    echo ""
    echo "🚀 Services disponibles:"
    echo "   - API Backend: http://localhost:3000"
    echo "   - Documentation API: http://localhost:3000/api"
    echo "   - Base de données: localhost:5432"
    echo ""
    echo "📋 Commandes utiles:"
    echo "   - Voir les logs: docker compose logs -f"
    echo "   - Arrêter les services: docker compose down"
    echo "   - Redémarrer: docker compose restart"
    echo "   - Shell dans l'app: docker compose exec app sh"
}

# Exécution principale
main() {
    log_info "🚀 Début du déploiement D&D Creator Backend"
    
    check_prerequisites
    setup_environment
    reset_database
    build_images
    start_services
    run_migrations
    show_deployment_info
    show_logs
}

# Gestion des signaux pour un arrêt propre
trap 'log_error "Déploiement interrompu"; exit 1' INT TERM

# Exécution
main
