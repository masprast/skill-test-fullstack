// import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// export const SerializeUser = createParamDecorator(
//   (data: string | undefined, ctx: ExecutionContext) => {
//     const request: Express.Request = ctx.switchToHttp().getRequest();
//     // console.log('data', data);
//     // console.log('request', request);

//     if (data) {
//       return 'request.user[data]';
//     }
//     return request.user;
//   },
// );
