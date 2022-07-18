import joi from "joi"

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const credentialsSchema = joi.object({
    title: joi.string().required(),
    URL: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
})