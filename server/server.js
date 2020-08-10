const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const publicPath = path.join(__dirname, "..", "public")
const db = require("../db/knex");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static assets
app.use(express.static(publicPath));

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

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});