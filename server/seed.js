const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const book = require("./models/Books");

async function seed() {
  await book.create({
    title: "Good Man",
    author: "John Wick",
    year: "1992",
  });

  await book.create({
    title: "Good Manno",
    author: "John Wick",
    year: "1992",
  });

  await book.create({
    title: "Good Man",
    author: "John Wick",
    year: "1992",
  });
  console.log("database up and running");
  mongoose.disconnect();
}

seed();
