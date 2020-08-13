require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./knex");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// retrieve recipes endpoint
app.get("/api/recipes", async (req, res) => {
    try {
      const recipes = await db.select().table("recipes");
      res.json(recipes);
    } catch (err) {
      console.error("Error loading recipes!", err);
      res.sendStatus(500);
    }
});

// add recipe endpoint
app.post("/api/add", async (req, res) => {
  try {
    await db("recipes").insert(req.body)
    // console.log("Added Recipe", req.body);
  } catch (err) {
    console.error("Error adding recipe!", err);
    res.sendStatus(500);
  }
})

// delete recipe endpoint
app.delete("/api/delete", async (req, res) => {
  try {
    await db("recipes")
      .where(req.body)
      .del()
    // console.log("Deleted Recipe", req.body);
  } catch (err) {
    console.error("Error adding recipe!", err);
    res.sendStatus(500);
  }
})

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});