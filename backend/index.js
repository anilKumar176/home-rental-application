import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app =express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.listen(3000,()=>{
    console.log("server id running on port 3000");
})
