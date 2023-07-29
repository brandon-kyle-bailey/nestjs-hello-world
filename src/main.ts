import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { config } from './config/configuration';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger();
  app.enableCors();
  await app.listen(config.port, '0.0.0.0');
  const appUrl = await app.getUrl();
  logger.log(`🚀 REST API playground ready at ${appUrl}`);
}
bootstrap();
