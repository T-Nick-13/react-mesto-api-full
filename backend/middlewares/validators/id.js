const { celebrate, Joi } = require('celebrate');

const id = celebrate({
  params: {
    cardId: Joi.string().required().min(2).hex(),
  },
});

module.exports = id;
