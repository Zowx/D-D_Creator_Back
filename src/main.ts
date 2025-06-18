import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from '@core/interceptor/bigint.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // <<< Ajoute ceci
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.useGlobalInterceptors(new BigIntInterceptor());
  await app.listen(3000);
}
bootstrap();
