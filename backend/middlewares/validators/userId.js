const { celebrate, Joi } = require('celebrate');

const userId = celebrate({
  params: {
    userId: Joi.string().required().min(2).hex(),
  },
});

module.exports = userId;
