import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let context = null;
export const ApplicationContext = async () => {
  if (!context) {
    context = await NestFactory.create(AppModule);
  }
  return context;
}