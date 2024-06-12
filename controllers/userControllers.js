import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { catchAsync } from "../helpers/catchAsync.js";
import { 
    findUser,
    registerUser,
    updateUser,
    validatePassword,
} from "../services/usersService.js";

dotenv.config();
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "23h",
  });

export const userSignUp = catchAsync (async (reg, res)=> {
    const {email}=reg.body;
    const user = await findUser({email});
    if(user){
        return res.status(409).send({message:'Email is used'});
    }
    const newUser = await registerUser(reg.body);
    const token = signToken(newUser.id);
    
    res.status(201).json({newUser, token})
});

export const userSignIn = catchAsync ( async (reg, res) => {
const {email,password}= reg.body;
const user = await findUser({email});
if(!user){
    return res.status(401).send({message:'Email or password is uncorrect'});
}
const userPassword = await validatePassword(password, user.password);
if(!userPassword){
    return res.status(401).send({message:'Email or password is uncorrect'});
}
const {_id: id} = user;
const token = signToken(user.id);
await updateUser({_id:id}, {token});

res.status(200).json({token, user: {email, subscription: user.subscription}});
});

export const getCurrentUser = catchAsync ((req, res) => {
    const {email} = req.user;

    res.json({
        email, subscription: req.user.subscription
    })
})

export const signout = catchAsync (async (req, res)=> {
    const {_id: id} = req.user;
    await updateUser({_id: id}, {token: ""});
    res.status(204).json({message: "No Content"});
})

export const updateStatus = catchAsync (async (req, res)=> {
    const {subscription} = req.user;
    const {_id: id} = req.user;
    await updateUser({_id: id}, {subscription});
    res.json({subscription});
})
