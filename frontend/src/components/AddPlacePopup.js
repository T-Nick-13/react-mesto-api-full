import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ onAddPlace, isOpen, onClose, btnValue }) {

  const [cardTitle, setCardTitle] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleChangeName(e) {
    setCardTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardTitle,
      link: cardLink
    });
    setCardTitle('');
    setCardLink('')
  }


  return (
    <PopupWithForm
      name="_card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      btnValue={btnValue}
      onSubmit={handleSubmit} >
      <input id="input-place"
        type="text"
        placeholder="Название"
        className="popup__text popup__text_place"
        minLength="1"
        maxLength="30"
        required
        onChange={handleChangeName}
        value={cardTitle} />
      <span id="input-place-error"
        className="popup__text-error">
      </span>
      <input id="input-link"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__text popup__text_link"
        required
        onChange={handleChangeLink}
        value={cardLink} />
      <span
        id="input-link-error"
        className="popup__text-error">
      </span>
    </PopupWithForm>
  )
}

export default AddPlacePopup
