import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 4000;

const URI = process.env.MongoDbURL

//connect mongo db
mongoose
    .connect(process.env.MongoDbURL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB Error:", err);
    });
//create route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send('Welcome to my book store');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});