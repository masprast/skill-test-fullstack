// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { LoginDto } from '@src/auth/dto/login.dto';
// import { User } from '@src/user/entities/user.entity';
// import { AuthService } from '@src/auth/auth.service';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// @Injectable()
// export class JWTStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_SECRET,
//     });
//   }

//   async validate(loginDto: LoginDto): Promise<User> {
//     const user = await this.authService.validateUser(loginDto);
//     if (!user) {
//       throw new UnauthorizedException();
//     }

//     return user;
//   }
// }
