const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getUserMe,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getUserMe);
router.get('/:userId', getUser);

router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

router.get('/me', getUserMe);

module.exports = router;
