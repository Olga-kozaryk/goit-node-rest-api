import Joi from "joi";

  export const createContactSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(4).required().email(),
    phone: Joi.string().min(4).required(),
    favorite: Joi.boolean(),
  });
  
  export const updateContactSchema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().min(4).email(),
    phone: Joi.string().min(4),
    favorite: Joi.boolean(),
  });

    export const updateStatusSchema = Joi.object({
      favorite: Joi.boolean().required(),
    });
