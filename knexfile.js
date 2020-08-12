require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://localhost/recipe`,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://localhost/recipe`,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://localhost/recipe`,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
