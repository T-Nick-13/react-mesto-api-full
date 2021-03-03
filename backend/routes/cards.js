const router = require('express').Router();
const {
  getCards, createCard, deleteCard, setLike, deleteLike,
} = require('../controllers/cards');
const idValidator = require('../middlewares/validators/id');
const createCardValidator = require('../middlewares/validators/createCard');

router.get('/', getCards);
router.post('/', createCardValidator, createCard);
router.delete('/:cardId', idValidator, deleteCard);
router.put('/:cardId/likes', idValidator, setLike);
router.delete('/:cardId/likes', idValidator, deleteLike);

module.exports = router;
