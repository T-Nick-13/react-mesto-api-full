const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { NotFound, Conflict, Unauthorized, BadRequest } = require('../errors');
const { JWT_SECRET, JWT_TTL } = require('../config');


const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(next);
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findOne({ _id: userId })

    .then((u) => {
      if (!u) {
        throw new NotFound('Нет пользователя с таким id');
      }
      return res.send(u);
    })
    .catch((err) => {
      next(err);
    });
};

const getUserMe = (req, res, next) => {
  const userId = req.user._id;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new NotFound('Нет пользователя с таким id');
      }
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Conflict('Пользователь уже существует');
      }
      return bcrypt.hash(password, 10);
    })
    .then((pass) => User.create({
      name, about, avatar, email, pass,
    }))
    .then(({ _id, eml }) => {
      res.send({ _id, eml });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequest('Введены некорректные данные');
      }
    })
    .catch(next);
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
  .then((u) => {
    if (!u) {
      throw new NotFound('Нет пользователя с таким id');
    }
    return res.send(u);
  })
  .catch((err) => {
    if (err.name === 'ValidationError') {
      throw new BadRequest('Введены некорректные данные');
    }
  })
  .catch(next);
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
  .then((u) => {
    if (!u) {
      throw new NotFound('Нет пользователя с таким id');
    }
    return res.send(u);
  })
  .catch((err) => {
    if (err.name === 'ValidationError') {
      throw new BadRequest('Введены некорректные данные');
    }
  })
  .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Неверный email или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((isValid) => {
          if (isValid) {
            return user;
          }
          throw new Unauthorized('Неверный email или пароль');
        });
    })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: JWT_TTL });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUsers, getUser, createUser, updateUser, updateAvatar, login, getUserMe,
};
