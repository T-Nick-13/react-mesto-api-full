const router = require('express').Router();

const usersRoute = require('./users');
const cardsRoute = require('./cards');
const authRoute = require('./auth');
const authMiddleware = require('../middlewares/auth');
const registerValidator = require('../middlewares/validators/register');

//router.use('/', registerValidator, authRoute);
router.use('/cards', authMiddleware, cardsRoute);
router.use('/users', authMiddleware, usersRoute);



module.exports = router;
