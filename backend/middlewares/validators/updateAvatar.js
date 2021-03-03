const { celebrate, Joi } = require('celebrate');

const updateAvatar = celebrate({
  body: {
    avatar: Joi.string().required().pattern(/https?:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/),
  },
});

module.exports = updateAvatar;
