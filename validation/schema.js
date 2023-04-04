const joi = require("joi");

exports.schema = {
  registerSchema: joi.object({
    name: joi.string().min(3).max(31).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(8).required(),
    confirmPassword:joi.ref("password"),
    dob: joi.date().greater(new Date("1990-01-01")).required(),
    age:joi.number().required(),
    languages: joi.array().items(joi.string()).required()
  }),
  loginSchema: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(8).required(),
  }),
};
