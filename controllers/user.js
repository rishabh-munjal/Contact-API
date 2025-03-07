import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "") {
    return res.json({ message: "All feilds are required" });
  }

  let user = await User.findOne({ email });

  if (user) {
    return res.json({ message: "User already exists ", success: false });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashPassword });

  res.json({ message: " User Created successfully", success: true, user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.json({ message: "All feilds are required" });
  }

  let user  = await User.findOne({email});

  if(!user){
    return res.json({message:"User doest not exist" , success : false})
  }

  let validPass = await bcrypt.compare(password , user.password);

  if(!validPass){
    return res.json({message:"Invalid Passowrd" , success : false})
  }

  const token = jwt.sign({userId:user._id} ,process.env.SECRET_KEY , {expiresIn:'1d'})

  res.json({message : "Welcome " ,token ,  success: true})


};
