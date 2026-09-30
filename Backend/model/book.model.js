import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    title: String,
    category: String,
    price: Number,
    image: String
})

//create model for schema holdes in container
const Book = mongoose.model("Book", bookSchema);

export default Book;