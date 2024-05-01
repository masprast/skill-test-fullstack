// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { AuthService } from '@src/auth/auth.service';
// import { LoginDto } from '@src/auth/dto/login.dto';
// import { User } from '@src/user/entities/user.entity';
// import { Strategy } from 'passport-local';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super();
//   }

//   async validate(loginDto: LoginDto): Promise<User> {
//     const user = await this.authService.validateUser(loginDto);
//     if (!user) {
//       throw new UnauthorizedException();
//     }

//     return user;
//   }
// }
