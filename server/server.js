const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("../db/knex");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/recipes", async (req, res) => {
    try {
      const recipes = await db.select().table("recipes");
      res.json(recipes);
    } catch (err) {
      console.error("Error loading recipes!", err);
      res.sendStatus(500);
    }
  });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});