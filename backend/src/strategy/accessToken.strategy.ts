// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Payload } from '@src/utils/jwt.config';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// @Injectable()
// export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_SECRET,
//     });
//   }

//   async validate(payload: Payload) {
//     return payload;
//   }
// }
