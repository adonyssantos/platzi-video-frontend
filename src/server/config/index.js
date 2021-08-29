import dotenv from 'dotenv';

dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  url: process.env.DOMAIN || 'http://localhost',
  port: process.env.PORT || 3000,
};

export default config;