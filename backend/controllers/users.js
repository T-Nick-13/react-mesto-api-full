const User = require('../models/user');
const { NotFound, Conflict } = require('../errors');
const bcrypt = require('bcrypt');

const checkDataError = (res, err) => {
  if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
    return res.status(400).send({ message: `Переданы неверные/ неполные данные: ${err}` });
  }
  return res.status(500).send({ message: `На сервере произошла ошибка ${err}` });
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  User.findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        throw new NotFound('Нет пользователя с таким id');
      }
      return res.send(user);
    })
    .catch((err) => {
      next(err);
    });
};

const createUser = (req, res, next) => {
  const { name, about, avatar, email, password } = req.body;

  User.findOne({email})
    .then((user) => {
      if (user) {
        throw new Conflict('Пользователь уже существует')
      }
      return bcrypt.hash(password, 10)
    })
    .then((password) => { //password = hash
      return User.create({name, about, avatar, email, password});
    })
    .then(({_id, email}) => {
      res.send({_id, email});
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
    .then((user) => res.send({ user }))
    .catch((err) => checkDataError(res, err));
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
    .then((user) => res.send({ user }))
    .catch((err) => checkDataError(res, err));
};

const login = (req, res, next) => {

}

module.exports = {
  getUsers, getUser, createUser, updateUser, updateAvatar, login
};
