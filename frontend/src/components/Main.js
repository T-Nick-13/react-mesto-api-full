import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header.js';
import Card from './Card.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header headerRoute="/sign-in" headerLink="Выйти" handleSignOut={props.handleSignOut} headerClass="header__link_grey">
        <p className="header__user">{props.email}</p>
      </Header>
      <main>
        <section
          className="profile page__profile">
          <div className="profile__container">
            <div className="profile__avatar_overlay" onClick={props.onEditAvatar} ></div>
            <img className="profile__avatar" src={currentUser.avatar} alt="Изображение аватар" />
            <div className="profile__info">
              <div className="profile__container-name">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
              </div>
              <p className="profile__occupation">{currentUser.about}</p>
            </div>

          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <ul className="elements page__elements">
          {
            props.cards.map((card)=>{
              return (
                <Card
                  key={card._id}
                  card={card}
                  onCardClick={props.handleCardClick}
                  onCardLike={props.handleCardLike}
                  onCardDelete={props.handleCardDelete}
                />
              )
            })
          }
        </ul>
      </main>
    </>
  )
}

export default Main;
