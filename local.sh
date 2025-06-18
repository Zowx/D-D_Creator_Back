#!/bin/bash

# Script pour lancer l'application en local avec Docker
# Usage: ./local.sh [options]

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
    echo "Lance l'application D&D Creator Backend en local avec Docker"
    echo ""
    echo "OPTIONS:"
    echo "  --logs              Show logs after starting"
    echo "  --stop              Stop all services"
    echo "  --restart           Restart all services"
    echo "  --status            Show services status"
    echo "  --shell [service]   Open shell in service (default: app)"
    echo "  --help              Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                    # Start services"
    echo "  $0 --logs             # Start and show logs"
    echo "  $0 --stop             # Stop all services"
    echo "  $0 --shell            # Open shell in app container"
    echo "  $0 --shell postgres   # Open shell in postgres container"
}

# Variables par défaut
SHOW_LOGS=false
STOP_SERVICES=false
RESTART_SERVICES=false
SHOW_STATUS=false
SHELL_SERVICE=""

# Analyse des arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --logs)
            SHOW_LOGS=true
            shift
            ;;
        --stop)
            STOP_SERVICES=true
            shift
            ;;
        --restart)
            RESTART_SERVICES=true
            shift
            ;;
        --status)
            SHOW_STATUS=true
            shift
            ;;
        --shell)
            SHELL_SERVICE="${2:-app}"
            shift 2
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

# Vérifier Docker
check_docker() {
    if ! command -v docker &> /dev/null; then
        log_error "Docker n'est pas installé"
        exit 1
    fi
    
    if ! command -v docker compose &> /dev/null; then
        log_error "Docker Compose n'est pas installé"
        exit 1
    fi
}

# Arrêter les services
stop_services() {
    log_info "Arrêt des services..."
    docker compose down
    log_success "Services arrêtés"
}

# Redémarrer les services
restart_services() {
    log_info "Redémarrage des services..."
    docker compose restart
    log_success "Services redémarrés"
}

# Afficher le statut des services
show_services_status() {
    log_info "Statut des services:"
    docker compose ps
}

# Ouvrir un shell dans un conteneur
open_shell() {
    log_info "Ouverture du shell dans le conteneur: $SHELL_SERVICE"
    
    # Vérifier si le service est en cours d'exécution
    if docker compose ps "$SHELL_SERVICE" | grep -q "Up"; then
        docker compose exec "$SHELL_SERVICE" sh
    else
        log_error "Le service $SHELL_SERVICE n'est pas en cours d'exécution"
        log_info "Services disponibles:"
        docker compose ps
    fi
}

# Démarrer les services
start_services() {
    log_info "Démarrage des services en local..."
    
    # Vérifier si .env existe
    if [[ ! -f ".env" ]]; then
        log_warning "Fichier .env non trouvé, copie depuis .env.example"
        cp .env.example .env
    fi
    
    # Démarrer les services
    docker compose up -d
    
    # Attendre que les services soient prêts
    log_info "Attente que les services soient prêts..."
    sleep 5
    
    # Vérifier le statut
    docker compose ps
    
    log_success "Services démarrés en local !"
    echo ""
    echo "🚀 Services disponibles:"
    echo "   - API Backend: http://localhost:3000"
    echo "   - Documentation API: http://localhost:3000/api"
    echo "   - Base de données: localhost:5432"
    echo ""
    echo "📋 Commandes utiles:"
    echo "   - Voir les logs: ./local.sh --logs"
    echo "   - Arrêter: ./local.sh --stop"
    echo "   - Redémarrer: ./local.sh --restart"
    echo "   - Shell app: ./local.sh --shell"
    echo "   - Shell DB: ./local.sh --shell postgres"
}

# Afficher les logs
show_logs() {
    if [[ "$SHOW_LOGS" == true ]]; then
        log_info "Affichage des logs (Ctrl+C pour quitter)..."
        docker compose logs -f
    fi
}

# Exécution principale
main() {
    check_docker
    
    if [[ "$STOP_SERVICES" == true ]]; then
        stop_services
    elif [[ "$RESTART_SERVICES" == true ]]; then
        restart_services
    elif [[ "$SHOW_STATUS" == true ]]; then
        show_services_status
    elif [[ -n "$SHELL_SERVICE" ]]; then
        open_shell
    else
        start_services
        show_logs
    fi
}

# Gestion des signaux pour un arrêt propre
trap 'log_error "Opération interrompue"; exit 1' INT TERM

# Exécution
main
