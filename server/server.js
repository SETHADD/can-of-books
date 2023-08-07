const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8041;
const app = express();
app.use(cors());
app.use(bp.json());
// Create an endpoint to the root route

const Books = require("./models/Books");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("can I be heard?");
});

app.get("/books", async (request, response) => {
  const allBooks = await Books.find(request.query);
  response.status(200).json(allBooks);
  console.log("we work fine");
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
