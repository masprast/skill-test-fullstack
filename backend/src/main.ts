import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Youapp Backend Techtest')
    .setDescription('Test skill for Backend with NestJS')
    .setVersion('1.0')
    .addTag('Backend Test')
    .addServer('/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  SwaggerModule.setup('api-docs', app, document, {
    customCss: '.scheme-container {display: none}',
  });
  await app.listen(3000);
}
bootstrap();
