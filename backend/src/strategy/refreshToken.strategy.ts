// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Payload } from '@src/utils/jwt.config';
// import { Request } from 'express';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// @Injectable()
// export class RefreshTokenStrategy extends PassportStrategy(
//   Strategy,
//   'jwt-refresh',
// ) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_REFRESH_SECRET,
//       passReqToCallback: true,
//     });
//   }

//   async validate(req: Request, payload: Payload) {
//     const refreshToken = req.headers.authorization.split(' ')[1];
//     return { ...payload, refreshToken };
//   }
// }
