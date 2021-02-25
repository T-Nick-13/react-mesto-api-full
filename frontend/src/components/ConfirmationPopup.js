import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function ConfirmationPopup() {

  return (
    <PopupWithForm
      name="-submit"
      title="Вы уверены?"
      btnValue="Да" >
    </PopupWithForm>
  )
}

export default ConfirmationPopup
