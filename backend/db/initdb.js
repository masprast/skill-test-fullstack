import { config } from 'dotenv';
config({ path: './../environment/local.env' });

db.getSiblingDB(process.env.MONGODB_DB);

db.createUser({
  user: process.env.MONGODB_USER,
  pwd: process.env.MONGODB_PASS,
  roles: [{ role: 'dbAdmin', db: process.env.MONGODB_DB }],
});
