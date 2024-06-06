import {isValidObjectId} from "mongoose";

export const isValidId = (reg, res, next) => {
   const{id} = reg.params;
   if (!isValidObjectId(id)){ 
    return res.status(404).send({message:'Not Found'});}
   next();
 };
