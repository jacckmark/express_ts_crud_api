import dotenv from "dotenv";

dotenv.config();

export const env = {
  app_port: process.env.APP_PORT,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_database: process.env.DB_DATABASE
};
