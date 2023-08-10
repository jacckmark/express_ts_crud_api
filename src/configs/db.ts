import { Pool } from 'pg';

export const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "my_password",
  port: 5432
});
