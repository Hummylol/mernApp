import express from "express";
import cors from 'cors';


const app =express();
app.use(cors());
app.get("/api/auth",(req,res)=>{
    res.json({message:"Hello people"})
})

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})