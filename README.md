# 🚀 D&D Creator - Backend API

<div align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</div>

<div align="center">
  <h3>RESTful API for D&D Character Management</h3>
  <p>Robust backend service built with NestJS providing comprehensive D&D character creation and management functionality</p>
</div>

---

## 🏗️ Architecture

This backend follows a **clean architecture** pattern with clear separation of concerns:

```
src/
├── core/
│   ├── auth/           # Authentication logic and constants
│   ├── guard/          # Security guards (JWT, roles)
│   ├── interceptor/    # Response interceptors (BigInt handling)
│   ├── models/         # Business domain models
│   ├── services/       # Business logic services
│   └── utils/          # Utility functions (cache, etc.)
├── ext.api/            # External API integration
│   ├── connector/      # Third-party API connectors
│   └── dto/            # External API DTOs
├── modules/            # NestJS modules organization
├── repository/         # Data access layer
│   ├── dbo/            # Database objects
│   └── *.repository.ts # Repository implementations
└── UI/                 # API layer
    ├── controller/     # REST controllers
    └── dto/            # API request/response DTOs
```

---

## 🛠️ Tech Stack

- **Framework**: NestJS v11 - Progressive Node.js framework
- **Database**: PostgreSQL - Robust relational database
- **ORM**: Prisma v6.7 - Modern database toolkit
- **Authentication**: JWT - Secure token-based authentication
- **Validation**: Class Validator & Class Transformer
- **Language**: TypeScript - Static typing for enhanced development
- **Testing**: Jest - Comprehensive testing framework
- **Deployment**: Railway - Cloud platform deployment

---

## 🌟 API Features

### 🔐 Authentication & Authorization

- JWT-based authentication
- Secure password hashing
- Role-based access control
- Session management

### 🎭 Character Management

- Complete character CRUD operations
- Character statistics calculation
- Level progression tracking
- Equipment and inventory management

### 📊 Game Data Management

- **Races**: All D&D 5e playable races with traits
- **Classes**: Character classes with progression
- **Backgrounds**: Character backgrounds with benefits
- **Skills**: Comprehensive skill system
- **Languages**: Language proficiency tracking
- **Alignments**: Moral alignment system

### 🔄 Data Validation

- Request payload validation
- Response data transformation
- Error handling and logging
- Input sanitization

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 20.0.0
- **pnpm** ≥ 8.0.0
- **PostgreSQL** ≥ 13

### Installation

1. **Install dependencies**

```bash
pnpm install
```

2. **Environment configuration**

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/dd_creator"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
PORT=3000
```

3. **Database setup**

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Seed database with sample data
npx prisma db seed
```

4. **Start development server**

```bash
pnpm run start:dev
```

The API will be available at `http://localhost:3000`

---

## 📚 Available Scripts

### Development

```bash
# Start in development mode with hot reload
pnpm run start:dev

# Start in debug mode
pnpm run start:debug

# Build the application
pnpm run build

# Start production server
pnpm run start:prod
```

### Testing

```bash
# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run e2e tests
pnpm run test:e2e

# Generate test coverage report
pnpm run test:cov
```

### Code Quality

```bash
# Run ESLint
pnpm run lint

# Format code with Prettier
pnpm run format
```

### Database

```bash
# Open Prisma Studio (Database GUI)
npx prisma studio

# Create new migration
npx prisma migrate dev --name <migration-name>

# Reset database (⚠️ Development only!)
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy
```

---

## 🔌 API Endpoints

### Authentication

```
POST   /auth/login         # User login
POST   /auth/register      # User registration
POST   /auth/refresh       # Refresh JWT token
GET    /auth/profile       # Get user profile
```

### Characters

```
GET    /characters         # Get user's characters
POST   /characters         # Create new character
GET    /characters/:id     # Get character by ID
PUT    /characters/:id     # Update character
DELETE /characters/:id     # Delete character
```

### Game Data

```
GET    /races              # Get all races
GET    /classes            # Get all classes
GET    /backgrounds        # Get all backgrounds
GET    /skills             # Get all skills
GET    /languages          # Get all languages
GET    /alignments         # Get all alignments
GET    /abilities          # Get all abilities
GET    /traits             # Get all traits
```

### External API

```
POST   /import/character   # Import character from external source
GET    /import/races       # Fetch races from D&D API
GET    /import/classes     # Fetch classes from D&D API
```

---

## 🗄️ Database Schema

### Core Entities

#### User

```sql
- id: BigInt (PK)
- username: String
- password: String (hashed)
- characters: Character[]
```

#### Character

```sql
- id: BigInt (PK)
- name: String
- player: String
- level: Int
- xp: Int
- hp, max_hp, temp_hp: Int
- AC: Int
- speed: Int
- personality, ideals, bonds, flaws: String
- age: Int
- height, weight, eyes, skin, hair: String
- appearance, allies, backstory, treasure: String
- raceId: BigInt (FK)
- classId: BigInt (FK)
- backgroundId: BigInt (FK)
- alignmentId: BigInt (FK)
- userId: BigInt (FK)
```

#### Game Data Tables

- **Race**: Playable races with traits and bonuses
- **Class**: Character classes with features
- **Background**: Character backgrounds with skills
- **Skill**: Available skills and proficiencies
- **Language**: Languages with regions
- **Alignment**: Moral alignments
- **Ability**: Core abilities (STR, DEX, CON, INT, WIS, CHA)
- **Traits**: Racial and class traits

---

## 🔧 Development Guidelines

### Code Structure

- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Repositories**: Handle data access
- **Models**: Define business entities
- **DTOs**: Data transfer objects for API
- **Guards**: Authentication and authorization
- **Interceptors**: Request/response transformation

### Best Practices

- Use TypeScript strict mode
- Implement proper error handling
- Follow NestJS conventions
- Write comprehensive tests
- Use DTOs for validation
- Implement proper logging
- Document API endpoints

### Code Quality Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Jest**: Testing framework

---

## 🚀 Deployment

### Railway Deployment

The application is configured for Railway deployment:

```bash
# Deploy to Railway
railway up

# View logs
railway logs

# Open in browser
railway open
```

### Environment Variables

Set these environment variables in your deployment platform:

```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
PORT=3000
```

---

## 🧪 Testing

### Unit Tests

```bash
# Run all unit tests
pnpm run test

# Run specific test file
pnpm run test -- auth.service.spec.ts

# Run tests with coverage
pnpm run test:cov
```

### E2E Tests

```bash
# Run end-to-end tests
pnpm run test:e2e
```

### Test Structure

```
test/
├── app.e2e-spec.ts     # Application E2E tests
├── jest-e2e.json       # E2E Jest configuration
└── mocks/              # Test mocks and fixtures
```

---

## 📖 Documentation

### API Documentation

- **Swagger/OpenAPI**: Available at `/api/docs` when running
- **Postman Collection**: Import from `docs/postman/`
- **Database Schema**: View with `npx prisma studio`

### Code Documentation

- **JSDoc**: Inline code documentation
- **Architecture**: See `docs/architecture.md`
- **Deployment**: See `docs/deployment.md`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

1. Create an issue for the feature/bug
2. Write tests for your changes
3. Implement the feature
4. Ensure all tests pass
5. Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using NestJS</p>
  <p>Part of the D&D Creator project</p>
</div>
