const { CelebrateError } = require('celebrate');

const errorHandler = (err, req, res, next) => {
  console.log(err);

/*   if (err instanceof CelebrateError){
    return res.status(400).send(err.details.get('body'));
  } */

  if (err.status){
    return res.status(err.status).send({ message: err.message });
  }

  res.status(500).send({ message: err.message });
}

module.exports = errorHandler;
