import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import EnvironmentService from './global/config/environment.service';

async function bootstrap(): Promise<void> {
  const app: NestApplication = await NestFactory.create(AppModule);
  const PORT: number = Number(process.env['APP_PORT']);
  await app.listen(PORT);
  console.log('App is running on port: ' + PORT);
}
bootstrap();
