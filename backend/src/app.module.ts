import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { ZohoModule } from './zoho/zoho.module';
import { ZohoMiddleware } from './zoho/zoho.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './environment/local.env',
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ThrottlerModule.forRoot([{ limit: 10, ttl: 60 }]),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_SERVER'),
        user: config.get<string>('MONGODB_USER'),
        pass: config.get<string>('MONGODB_PASS'),
        dbName: config.get<string>('MONGO_INITDB_DATABASE'),
      }),
    }),
    UserModule,
    AuthModule,
    MessagesModule,
    ZohoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ZohoMiddleware).forRoutes('/');
  }
}
