export const popup = document.querySelector('.popup');
export const popupEditButton = document.querySelector('.profile__edit-button');
export const popupCloseButton = popup.querySelector('.popup__close-btn');

export const nameInput = popup.querySelector('.popup__text_name');
export const jobInput = popup.querySelector('.popup__text_occupation');
export const nameProfile = document.querySelector('.profile__name');
export const occupationProfile = document.querySelector('.profile__occupation');
export const editProfileForm = document.querySelector('.popup__form_profile');
export const avatarProfile = document.querySelector('.profile__avatar_overlay');

export const cardAddPopup = document.querySelector('.popup__form_card');
export const elementContainer = document.querySelector('.elements');
export const binBtn = document.querySelector('.elements__del');


export const popupImg = document.querySelector('.popup-image');
export const popupPicTitle = popupImg.querySelector('.popup-image__title');
export const popupPicSrc = popupImg.querySelector('.popup-image__picture');

export const formElement = document.querySelector('.popup__container');

export const popupCard = document.querySelector('.popup_card');
export const popupAddButton = document.querySelector('.profile__add-button');
export const popupCardCloseButton = popupCard.querySelector('.popup__close-btn');
export const cardAddInputText = cardAddPopup.querySelector('.popup__text_place');
export const cardAddInputLink = cardAddPopup.querySelector('.popup__text_link');
export const popupWithSubmitForm = document.querySelector('.popup-submit');
export const popupAvatar = document.querySelector('.popup-avatar');
export const avatarInputLink = popupAvatar.querySelector('.popup__text_link');
export const avatarProfileSrc = document.querySelector('.profile__avatar');


export const initialCards = [
  {
      name: 'Карелия',
      link: 'https://images.unsplash.com/photo-1573156667488-5c0cec674762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Омск',
      link: 'https://images.unsplash.com/photo-1575457180622-9ca8a083c50a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80'
  },
  {
      name: 'Санкт-Петербург',
      link: 'https://images.unsplash.com/photo-1551709076-89f2499d383b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
