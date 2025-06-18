# Dockerfile pour D&D Creator Backend
FROM node:20

# Installation de pnpm avec timeout plus long
RUN npm install -g pnpm@10.10.0 --registry https://registry.npmjs.org/

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install dependencies avec timeout étendu
RUN pnpm config set network-timeout 300000 && \
    pnpm install --frozen-lockfile --no-optional

# Copy source code
COPY . .

# Generate Prisma client and build
RUN pnpm prisma generate && pnpm build

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:prod"]
