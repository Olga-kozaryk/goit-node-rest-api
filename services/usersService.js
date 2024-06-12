import bcrypt from "bcrypt";

import { User } from "../models/userModel.js";

export const findUser= filter => User.findOne(filter);

export const registerUser = async (data) => {
const {email, password} = data;
const hashedPassword = await bcrypt.hash(password,10);

const newUser = await User.create({email, password: hashedPassword});
newUser.password = undefined;

return newUser;
};

export const validatePassword = (password, hashPassword) => 
  bcrypt.compare(password, hashPassword);

export async function listUsers() {
    const user = await User.find();
    return user;
  }
  
  export const getUserByIdService = (id) => User.findById(id);
  
  export const updateUser = (filter, data) => User.findOneAndUpdate(filter, data);
  
  export const findUserByToken = (token) => User.findOne({ token });
  ;
