const Card = require('../models/card');
const {
  Forbidden, NotFound, BadRequest,
} = require('../errors');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequest('Введены некорректные данные');
      }
      throw err;
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .orFail(new NotFound('Нет карточки с таким id'))
    .then((card) => {
      if (req.user._id === card.owner.toString()) {
        Card.findByIdAndRemove(req.params.cardId)
          .then((delcard) => res.send({ delcard }))
          .catch(next);
      } else {
        throw new Forbidden('Нет доступа');
      }
    })
    .catch((err) => {
      throw err;
    })
    .catch(next);
};

const setLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFound('Нет карточки с таким id');
      }
      res.send(card);
    })
    .catch((err) => {
      throw err;
    })
    .catch((err) => {
      next(err);
    });
};

const deleteLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFound('Нет карточки с таким id');
      }
      res.send(card);
    })
    .catch((err) => {
      throw err;
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getCards, createCard, deleteCard, setLike, deleteLike,
};
