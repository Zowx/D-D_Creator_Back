# 🐳 D&D Creator Backend - Docker

Déploiement simplifié avec Docker pour le développement.

## 📋 Prérequis

- Docker
- Docker Compose

## 🚀 Utilisation

### Lancer en local

```bash
# Démarrer l'application
./local.sh

# Démarrer et voir les logs
./local.sh --logs

# Arrêter l'application
./local.sh --stop

# Redémarrer
./local.sh --restart

# Voir le statut
./local.sh --status

# Accéder au shell de l'app
./local.sh --shell

# Accéder au shell de la DB
./local.sh --shell postgres
```

### Déployer

```bash
# Déploiement normal
./deploy.sh

# Déploiement avec reset de la DB
./deploy.sh --fresh-db

# Reconstruction complète
./deploy.sh --no-cache

# Déploiement avec logs
./deploy.sh --logs
```

## 🛠️ Services

- **Backend API**: http://localhost:3000
- **Documentation**: http://localhost:3000/api/docs
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## ⚙️ Configuration

Copiez `.env.example` vers `.env` et modifiez si nécessaire.

## 📊 Commandes Docker

```bash
# Voir les logs
docker compose logs -f

# Redémarrer un service
docker compose restart app

# Migrations Prisma
docker compose exec app pnpm prisma migrate deploy

# Prisma Studio
docker compose exec app pnpm prisma studio

# Shell dans l'app
docker compose exec app sh
```
