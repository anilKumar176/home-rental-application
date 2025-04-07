import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";

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
    return next(errorHandler(409,"User already exists"))
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
       next(error);
    }
}



//login page
export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    const validUser = await User.findOne({ email });

    if (!validUser) {
     return next(errorHandler(404,"User not found!"))

    }

    const validPassword = await bcryptjs.compare(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400,"Wrong credentials!"))

    }

    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Optional: add expiry
    );

    const { password: pass, ...user } = validUser._doc;

    res.status(200).json({ token, user });
  } catch (error) {
   next(error)
  }
};
