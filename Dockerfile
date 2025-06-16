# Backend Dockerfile
FROM node:20-slim AS builder

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --no-frozen-lockfile

# Copier le code source
COPY . .

# Définir les variables d'environnement pour Prisma
ENV DATABASE_URL="postgresql://dummy:dummy@dummy:5432/dummy"

# Générer le client Prisma
RUN pnpm prisma generate

# Build l'application
RUN pnpm run build

# Production stage
FROM node:20-slim AS production

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Copier les fichiers Prisma
COPY prisma ./prisma

# Installer toutes les dépendances, générer Prisma, puis nettoyer
ENV DATABASE_URL="postgresql://dummy:dummy@dummy:5432/dummy"
RUN pnpm install --no-frozen-lockfile && \
    pnpm prisma generate && \
    pnpm install --no-frozen-lockfile --prod

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist ./dist

# Copier les fichiers générés de Prisma depuis le builder
COPY --from=builder /app/generated ./generated

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["pnpm", "run", "start:prod"]
