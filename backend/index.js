import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.route.js";
import listingRoutes from "./routes/listing.route.js"
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
app.use("/api/listing", listingRoutes);
app.listen(3000,()=>{
    console.log("server id running on port 3000");
})

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode||500
    const message =err.message ||"Internel server error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})

