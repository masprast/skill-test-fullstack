import * as bcrypt from 'bcrypt';

export const hash = async (passphrase: string) => {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(passphrase, salt);
  return hashed;
};

export const deHash = async (password: string, hashed: string) => {
  const ismatch = await bcrypt.compare(password, hashed);
  return ismatch;
};
