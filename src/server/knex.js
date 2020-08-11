require("dotenv").config();

const environment = process.env.NODE_ENV || 'development';
const knex = require("knex");
const dbConfig = require("../knexfile")[environment]

const db = knex(dbConfig);

module.exports = db;