const { CelebrateError } = require('celebrate');

const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.status) {
    return res.status(err.status).send({ message: err.message });
  }

  if (err instanceof CelebrateError) {
    return res.status(400).send({ message: `Переданы неверные/ неполные данные: ${err}` });
  }

  res.status(500).send({ message: err.message });
  return next();
};

module.exports = errorHandler;
