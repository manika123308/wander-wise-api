//const express = require("express");
import express from "express";
import connectDB from './config/database.js';
import HANDLERS from './handlers.js/index.js';
import errorMiddleware from './middlewares/error.js';

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/", HANDLERS);
app.use(errorMiddleware);

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
});

