const router = require('express').Router();
const {
  getUsers, getUser, createUser, updateUser, updateAvatar, getUserMe
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:userId', getUser);
router.get('/me', getUserMe);
router.post('/', createUser);
router.patch('/me', getUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
