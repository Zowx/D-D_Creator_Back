import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from '@core/interceptor/bigint.interceptor';
import { middleware } from './midlleware/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new BigIntInterceptor());
  app.use(middleware);
  await app.listen(3000);
}
bootstrap();
