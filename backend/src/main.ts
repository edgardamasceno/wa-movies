import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './application/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('WA Movies API')
    .setDescription(
      'API to list movies and their details, and update/wipe movies database.',
    )
    .setVersion('1.0')
    .addTag('movies')
    .addTag('database')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  process.env.ENABLE_CORS == 'true' ? app.enableCors() : null;

  await app.listen(parseInt(process.env.NODE_PORT) || 3000);
}
bootstrap();
