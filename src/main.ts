/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TransformInterceptor } from 'src/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
