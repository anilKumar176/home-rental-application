import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.route.js";
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongodb");  //connected successfully
}).catch((err)=>{
    console.log(err);  //error while connecting to mongodb
})
const app =express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api/auth", authRoutes);
app.listen(3000,()=>{
    console.log("server id running on port 3000");
})


