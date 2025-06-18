# Deployment

## Local

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the database (if needed, e.g. Docker, Railway...)
3. Start the backend:
   ```sh
   pnpm run start:dev
   ```
4. Start the frontend (see Front folder)

## Production

- Configure environment variables (`.env`)
- Build the backend:
  ```sh
  pnpm run build
  ```
- Start the backend:
  ```sh
  pnpm run start:prod
  ```

## Documentation

- Swagger: `/api/docs`
- Prisma Studio: `npx prisma studio`
