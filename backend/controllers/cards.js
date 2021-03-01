const Card = require('../models/card');

const checkDataError = (res, err) => {
  if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
    return res.status(400).send({ message: `Переданы неверные/ неполные данные: ${err}` });
  }
  return res.status(500).send({ message: `На сервере произошла ошибка ${err}` });
};

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => checkDataError(res, err));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => checkDataError(res, err));
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send({ card });
    })
    .catch((err) => checkDataError(res, err));
};

const setLike = (req, res, next) => {
  // const { cardId } = req.params;
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send(card);
    })
    .catch(next);
};

const deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send(card);
    })
    .catch((err) => checkDataError(res, err));
};

module.exports = {
  getCards, createCard, deleteCard, setLike, deleteLike,
};
