const { celebrate, Joi } = require('celebrate');

const id = celebrate({
  params: {
    cardId: Joi.string().required().length(24).hex(),
  },
});

module.exports = id;
