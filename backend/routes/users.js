const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getUserMe,
} = require('../controllers/users');
const userIdValidator = require('../middlewares/validators/userId');
const updateAvatarValidator = require('../middlewares/validators/updateAvatar');
const updateUserValidator = require('../middlewares/validators/updateUser');

router.get('/', getUsers);
router.get('/me', getUserMe);
router.get('/:userId', userIdValidator, getUser);
router.patch('/me', updateUserValidator, updateUser);
router.patch('/me/avatar', updateAvatarValidator, updateAvatar);
router.get('/me', getUserMe);

module.exports = router;
