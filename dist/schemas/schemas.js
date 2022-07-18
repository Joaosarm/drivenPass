import joi from "joi";
export var signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
export var credentialsSchema = joi.object({
    title: joi.string().required(),
    URL: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
});
export var notesSchema = joi.object({
    title: joi.string().pattern(/^.{1,50}$/).required(),
    note: joi.string().pattern(/^.{1,1000}$/).required()
});
export var cardsSchema = joi.object({
    title: joi.string().required(),
    number: joi.number().required(),
    printedName: joi.string().required(),
    CVV: joi.string().pattern(/^[0-9]{3}$/).required(),
    expireDate: joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
    password: joi.string().pattern(/^[0-9]{4,6}$/).required(),
    isVirtual: joi.bool(),
    type: joi.string().valid('credit', 'debit', 'both').required()
});
export var wifisSchema = joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required()
});
