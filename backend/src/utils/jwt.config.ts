export type JwtConfig = {
  secret: string;
  expiresIn: string;
};

export type Payload = {
  sub: string;
  email: string;
};

export const accessTokenConfig = (): JwtConfig => ({
  secret: process.env.JWT_SECRET ?? '',
  expiresIn: '1h',
});

// export const refreshTokenConfig = (): JwtConfig => ({
//   secret: process.env.JWT_REFRESH_SECRET ?? '',
//   expiresIn: '7d',
// });
