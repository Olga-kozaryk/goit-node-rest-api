import {isValidObjectId} from "mongoose";
import { HttpError } from "../helpers/HttpError.js";

export const isValidId = (reg, res, next) => {
   const{id} = reg.params;
   if(!isValidObjectId(id)) {
   return next( HttpError(404,'Not Found'));
   }
   next();
 };

 export const validateBody = (schema) => {
   const func = (req, _, next) => {
     const { error } = schema.validate(req.body);
     if (error) {
     return next(HttpError(400, error.message));
     }
     next();
   };
 
   return func;
 }; 
