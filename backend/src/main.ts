import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Youapp Backend Techtest')
    .setDescription('Test skill for Backend with NestJS')
    .setVersion('1.0')
    // .addServer('http://localhost/3000/', 'Local')
    .addTag('Backend Test')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
