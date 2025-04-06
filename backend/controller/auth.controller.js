import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const register =async(req,res,next)=>{
 try {
    const {firstName ,lastName ,email,password}=req.body;
const profileImage = req.file;
if(!profileImage){
    return res.status(400).send("NO FILE UPLOAD");
}
const profileImagePath=profileImage.path;
const existingUser=await User.findOne({email});
   if(existingUser){
    return res.status(409).json({message:"User already exists"});
   }
const hashedPassword=bcryptjs.hashSync(password,10);
 //create new user and save to db
   const newUser=new User({
    firstName,
    lastName,
    email,
    password:hashedPassword,
    profileImagePath,
   });
   await newUser.save();
   res.status(201).json({message :"user create successfully",user:newUser});
    } catch (error) {
       console.log(error);
    }
}