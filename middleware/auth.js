import  jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "../models/user.js"

dotenv.config()

export const isAuthenticated = async (req , res , next) => {

    const token = req.header('Auth')

    if(!token){
        return res.json({message : "User not Authenticated"})
    }

    const decoded = jwt.verify(token , process.env.SECRET_KEY);
    const id = decoded.id;

    let user  = await User.findById(id);

    if(!user){
        return res.json({message : "User not found"})
    }

    req.user = user;  //* GlobaL

    next();
    
}