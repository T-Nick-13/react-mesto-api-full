const { celebrate, Joi } = require('celebrate');

const userId = celebrate({
  params: {
    userId: Joi.string().required().length(24).hex(),
  },
});

module.exports = userId;
