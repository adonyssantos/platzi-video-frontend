import dotenv from 'dotenv';

dotenv.config();

const config = {
  production: process.env.NODE_ENV === 'production',
  dev: process.env.NODE_ENV === 'development',
  url: process.env.DOMAIN || 'http://localhost',
  port: process.env.PORT || 3000,
};

export default config;
