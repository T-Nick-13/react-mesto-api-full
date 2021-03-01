const jwt = require('jsonwebtoken');
const { Forbidden } = require('../errors');
const { JWT_SECRET } = require('../config');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Forbidden('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Forbidden('Необходима авторизация');
  }

  req.user = payload;

  next();
};

module.exports = auth;
