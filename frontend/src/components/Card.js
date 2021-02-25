import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card( { card, onCardLike, onCardClick, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (`elements__del ${isOwn ? 'elements__del_active' : ''}`);

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`elements__like ${isLiked ? 'elements__like_active' : ''}`);


  function handleClick() {
    onCardClick({
      link: card.link,
      name: card.name
    });
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }


  return(
    <li className="elements__element">
      <img className="elements__img" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="elements__container">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className={cardLikeButtonClassName} src="./images/Vector.svg" alt="Изображение отметка Нравится"
          onClick={handleLikeClick} ></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName} src="./images/Group.svg" alt="Изображение удалить"
      onClick={handleDeleteClick} ></button>
    </li>
  )
}

export default Card
