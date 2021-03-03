const { celebrate, Joi } = require('celebrate');

const createCard = celebrate({
  body: {
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().pattern(/https?:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/).required(),
  },
});

module.exports = createCard;
