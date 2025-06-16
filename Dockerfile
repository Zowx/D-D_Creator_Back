# Backend Dockerfile
FROM node:20-alpine AS builder

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --no-frozen-lockfile

# Copier le code source
COPY . .

# Build l'application
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer seulement les dépendances de production
RUN pnpm install --no-frozen-lockfile --prod

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist ./dist

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["pnpm", "run", "start:prod"]
