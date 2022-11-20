import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.ENABLE_CORS == 'true' ? app.enableCors() : null;
  app.setGlobalPrefix('api/v1');

  await app.listen(parseInt(process.env.NODE_PORT) || 3000);
}
bootstrap();
