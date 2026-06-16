import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  // Strip unknown properties and reject payloads with extra fields.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // All routes are served under /api.
  app.setGlobalPrefix('api');

  const origins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((o) => o.trim());
  app.enableCors({ origin: origins });

  const port = Number(process.env.PORT) || 3001;
  await app.listen(port);
  Logger.log(`Chukuta API listening on http://localhost:${port}/api`, 'Bootstrap');
}

bootstrap();
