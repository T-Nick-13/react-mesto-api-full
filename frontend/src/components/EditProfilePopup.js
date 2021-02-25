import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    if (currentUser) {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }
  }, [currentUser]);


  return (
    <PopupWithForm name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      btnValue={props.btnValue}
      onSubmit={handleSubmit} >
        <input
          id="input-name"
          type="text"
          placeholder="Имя"
          className="popup__text popup__text_name"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleChangeName}
          name="name"
        />
        <span
          id="input-name-error"
          className="popup__text-error">
        </span>
        <input
          id="input-occupation"
          type="text" placeholder="О себе"
          className="popup__text popup__text_occupation"
          minLength="2" maxLength="200"
          required
          value={description}
          onChange={handleChangeDescription}
          name="about"
        />
        <span
          id="input-occupation-error"
          className="popup__text-error">
        </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup
