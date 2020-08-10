const knex = require("knex");

// Application error when trying to deploy to Heroku
const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://localhost/recipe`,
  searchPath: "public",
});

module.exports = db;