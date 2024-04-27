import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { RefreshToken, RefreshTokenSchema } from './entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/accesstoken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshtoken.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenSchema },
    ]),
    PassportModule.register({ session: false }),
  ],
  providers: [
    AuthService,
    UsersService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
