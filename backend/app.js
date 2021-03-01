const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const path = require('path');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { login, createUser } = require('./controllers/users');
const registerValidator = require('./middlewares/validators/register');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { celebrate, Joi } = require('celebrate');
const { NotFound } = require('../backend/errors');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(cors());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate({
  body: Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
  }),
}), login);
app.post('/signup', registerValidator, createUser);

app.use('/', router);
// раздаём папку с собранным фронтендом
/* app.use(express.static(path.join(__dirname, '../frontend/build'))); */

app.use(errorLogger);

app.use(errorHandler);

app.use((req, res) => {
  throw new NotFound('Запрашиваемый ресурс не найден');
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
