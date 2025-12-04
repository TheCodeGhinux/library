import jwt from "jsonwebtoken";
import {User} from "../models/User.js";
import bcrypt from 'bcryptjs';


export const registerUser = async (req, res) => {

  // console.log("Body: ", req.body);
  
  const {name, email, address, phone, role, password} = req.body

  const existingUser = await User.findOne({email});

  if (existingUser) {
    res.status(400).json({message: 'User already exists with this email'});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // const user = await User.create({...req.body, password: hashedPassword});
  const user = await User.create({name, email, address, phone, role, password: hashedPassword});

  return user;
}

export const loginUser  = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    return res.status(400).json({message: 'Invalid email or password'});
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({message: 'Invalid email or password'});
  }

  const token = jwt.sign({id: user._id, email: user.email, name: user.name, role: user?.role}, process.env.SECRET_KEY, {expiresIn: '1d'});

  return {token, user};

}

// export default {registerUser, login};