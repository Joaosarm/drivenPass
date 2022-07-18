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

export const notesSchema = joi.object({
    title: joi.string().pattern(/^.{1,50}$/).required(),
    note: joi.string().pattern(/^.{1,1000}$/).required()
})