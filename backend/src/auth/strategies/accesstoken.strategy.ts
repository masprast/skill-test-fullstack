import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { Payload, accessTokenConfig } from 'src/utils/jwt.config';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'access-token',
) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: accessTokenConfig().secret,
    });
  }

  async validate(payload: Payload) {
    // console.log('payload', payload);
    // const user = await this.userService.findOne(String(payload.sub));
    // if (!user) {
    //   throw new UnauthorizedException('User not found');
    // }
    // return user;
    return payload;
    // return new UserDto(
    //   (await this.userService.findById(payload.sub.toString())) as object,
    // );
  }
}
