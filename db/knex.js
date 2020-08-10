const knex = require("knex");

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://localhost/recipe`,
  searchPath: "public",
});

module.exports = db;