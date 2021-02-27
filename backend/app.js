const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { login, createUser
} = require('../backend/controllers/users');
const authMiddleware = require('../backend/middlewares/auth');
const registerValidator = require('../backend/middlewares/validators/register');

const { PORT = 3000 } = process.env;
const app = express();
const cors = require('cors');

const path = require('path');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(cors());


app.post('/signin', login);
app.post('/signup', registerValidator, createUser);

app.use('/', router);

// раздаём папку с собранным фронтендом
/* app.use(express.static(path.join(__dirname, '../frontend/build'))); */

/* app.use(errorHandler); */

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});



