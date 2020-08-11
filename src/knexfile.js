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
  },
  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://localhost/recipe`,
    migrations: {
      directory: "./migrations",
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
  },
};
