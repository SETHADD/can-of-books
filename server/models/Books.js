const mongoose = require("mongoose");
const {Schema} = mongoose;

const newBook = new Schema({
    title: String,
    author: String,
    year: Number
});

const Book = mongoose.model("AllBooks",newBook);

module.exports = Book;