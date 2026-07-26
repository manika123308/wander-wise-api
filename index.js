//Const express = reqauired("express");
import express from "express";
import connectDB from './config/database.js';
import HANDLERS from './handlers/index.js';
import errorMiddleware from "./middlewares/error.js";
import { authMiddleware } from "./middlewares/auth.js";
import cors from "cors";


const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
}))
app.use(express.json());
app.use(cors());
app.use("/", HANDLERS);
app.use(authMiddleware)

app.use(errorMiddleware);

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});