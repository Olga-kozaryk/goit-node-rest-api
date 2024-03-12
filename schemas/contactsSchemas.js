import Joi from "joi";

export const contactSchema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().min(2).email().required(),
    phone: Joi.string().min(6).required()
});

