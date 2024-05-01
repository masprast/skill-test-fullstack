import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // RabbitMQ
  const configRabbit = app.get(ConfigService);
  const user = configRabbit.get('RABBITMQ_USER');
  const password = configRabbit.get('RABBITMQ_PASSWORD');
  const host = configRabbit.get('RABBITMQ_HOST');
  const queueName = configRabbit.get('RABBITMQ_QUEUE_NAME');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@${host}`],
      queue: queueName,
      noAck: false,
      queueOptions: {
        durable: true,
      },
      socketOptions: {},
      headers: {},
    },
  });

  app.startAllMicroservices();

  // Swagger
  const configDoc = new DocumentBuilder()
    .setTitle('Youapp Backend Techtest')
    .setDescription('Test skill for Backend with NestJS')
    .setVersion('1.0')
    .addTag('Backend Test')
    .addServer('/api')
    .build();

  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('api-docs', app, document, {
    customCss: '.scheme-container {display: none}',
  });

  // APP
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:4200',
    ],
  });
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
