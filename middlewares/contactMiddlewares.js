import {isValidObjectId} from "mongoose";
import HttpError from "../helpers/HttpError.js"

export const isValidId = (reg, res, next) => {
   const{id} = reg.params;
   if(!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id!`));
   }
   next();
 };

 export const validateBody = (schema) => {
   const func = (req, _, next) => {
     const { error } = schema.validate(req.body);
     if (error) {
     next(HttpError(400, error.message));
     }
     next();
   };
 
   return func;
 }; 
