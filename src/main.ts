import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from '@core/interceptor/bigint.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Only show log, warn, and error (no debug/verbose)
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'warn', 'error'],
  });

  // Enable CORS
  app.enableCors({
    origin: true, // Allow all origins in development, configure for production
    credentials: true,
  });

  app.useGlobalInterceptors(new BigIntInterceptor());

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('D&D Creator API')
    .setDescription('API for D&D Character Creator application')
    .setVersion('1.0')
    .addTag('characters')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`\n\x1b[36m==============================\x1b[0m`);
  console.log(`\x1b[35mD&D Creator API is running on port ${port}!\x1b[0m`);
  console.log(`\x1b[36mSwagger: http://localhost:${port}/api/docs\x1b[0m`);
  console.log(`\x1b[36m==============================\x1b[0m\n`);
}
bootstrap();
