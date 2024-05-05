import { ExecutionContext, createParamDecorator } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export const SerializeUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    // const token = request.headers.authorization.split(' ')[1];
    // const decoded = JwtService.prototype.decode(token);
    console.log('data', request.user);
    // console.log('request', decoded);

    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
