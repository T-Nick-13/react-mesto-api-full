const { celebrate, Joi } = require('celebrate');

const register = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
    name: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/https?:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/),
    about: Joi.string().min(2).max(30),
  }),
});

module.exports = register;
