import Joi from "joi";
import { joiValidator } from "./joiValidator.js";

  export const createContactSchema = joiValidator((data) =>Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(4).required().email(),
    phone: Joi.string().min(4).required(),
    favorite: Joi.boolean(),
  })
  .validate(data)
  );
  
  export const updateContactSchema = joiValidator((data) => Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().min(4).email(),
    phone: Joi.string().min(4),
    favorite: Joi.boolean(),
  })
    .validate(data)
    );
