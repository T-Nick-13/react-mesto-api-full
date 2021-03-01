const jwt = require('jsonwebtoken');
const { Forbidden } = require('../errors');
// const { JWT_SECRET } = require('../config');
const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization /* || !authorization.startsWith('Bearer ') */) {
    throw new Forbidden('Необходима авторизация?');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, `${NODE_ENV === 'production' ? JWT_SECRET : 'secret'}`);
  } catch (error) {
    throw new Forbidden('Необходима авторизация??');
  }

  req.user = payload;

  next();
};

module.exports = auth;
