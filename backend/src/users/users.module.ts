import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersGateway, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
