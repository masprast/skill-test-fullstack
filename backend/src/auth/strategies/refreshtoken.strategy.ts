import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { Payload, refreshTokenConfig } from 'src/utils/jwt.config';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh-token',
) {
  constructor(private userService: UsersService) {
    super({
      // jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: refreshTokenConfig().secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: Payload) {
    const refresh_token = req.get('Authorization').replace('Bearer', '').trim();
    return { ...payload, refresh_token };
    // const user = await this.userService.findById(payload.sub);
    // if (!user) {
    //   throw new UnauthorizedException('User not foound');
    // }
    // return user;
  }
}
