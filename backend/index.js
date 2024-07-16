import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import routes from "./routes/routes.js"
import { Workout } from "./models/models.js";

const app =express();
app.use(cors());
app.use(express.json());

const MONGO_URI="mongodb+srv://humaid:humaid@workouts.3rpzgv1.mongodb.net/?retryWrites=true&w=majority&appName=Workouts";
mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected to DB successfully");
}).catch((error)=>{
    console.log("Error connecting to DB");
})


app.get("/api/auth",(req,res)=>{
    res.json({message:"Hello people"})
})
app.use("/api", routes);

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})