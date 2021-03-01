const router = require('express').Router();

const usersRoute = require('./users');
const cardsRoute = require('./cards');
const authMiddleware = require('../middlewares/auth');

router.use('/users', authMiddleware, usersRoute);
router.use('/cards', authMiddleware, cardsRoute);

module.exports = router;
