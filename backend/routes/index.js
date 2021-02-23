const router = require('express').Router();

const usersRoute = require('./users');
const cardsRoute = require('./cards');
const authMiddleware = require('../middlewares/auth');

router.use('/cards', cardsRoute);
router.use('/users', authMiddleware, usersRoute);

module.exports = router;
