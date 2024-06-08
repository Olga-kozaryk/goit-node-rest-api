import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(6).max(20).required(),
    subscription: Joi.string().min(3).max(15),
});

export const loginUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
