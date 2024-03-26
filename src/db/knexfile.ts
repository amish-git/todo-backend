import dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config({
  path: `${__dirname}/../../.env`,
});

const config: { [key: string]: Knex.Config } = {
  local: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      ssl: false,
    },
    pool: {
      min: 2,
      max: 20,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  prod: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
