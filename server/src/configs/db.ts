import { Pool } from 'pg';
import { env } from '../env';

export const pool = new Pool({
  user: env.db_username,
  password: env.db_password,
  host: env.db_host,
  database: env.db_database,
  port: Number(env.db_port) || 5432
});
