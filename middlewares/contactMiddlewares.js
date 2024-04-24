import {isValidObjectId} from "mongoose";

import {HttpError} from "../helpers/HttpError.js";
import { catchAsync } from "../helpers/catchAsync.js";
import { createContactSchema, updateContactSchema } from "../helpers/contactValidators.js";
import { checkContactExistsService, getContactsByIdService } from "../services/contactService.js";

export const checkCreateContact = catchAsync(async (reg, res, next) =>{
    const {value, errors} = createContactSchema(reg.body);

    if (errors) throw new HttpError(400, 'Invalid contact data..', errors);

    const contactExists = await checkContactExistsService({name: value.name});

    if (contactExists) throw new HttpError(409, 'Contact with that name already exsts.. ');

    reg.body = value;
    next();
 });

 export const checkUpdateContactData = (reg, res, next) =>{
    const{ value, errors} = updateContactSchema(reg.body);

    if (errors) throw new HttpError(400, 'Invalid contact data..', errors);

    reg.body = value;

    next();
 };

 export const isValidId = (reg, res, next) => {
   const{id} = reg.params;
   if(!isValidObjectId(id)) {
      next(HttpError(400,`is not valid id`));
   }
   next();
 }
