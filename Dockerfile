# Dockerfile simple pour D&D Creator Backend
FROM node:20

# Installation de pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client and build
RUN pnpm prisma generate && pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:prod"]

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:prod"]
