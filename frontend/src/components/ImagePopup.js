function ImagePopup(props) {
  return(
    <div className={`popup-image ${props.card.link ? 'popup_opened' : ''}`} >
      <div className="popup-image__container">
        <img className="popup-image__picture" src={props.card.link} alt={props.card.name} />
        <p className="popup-image__title">{props.card.name}</p>
        <button className="popup-image__close-btn popup__close-btn" type="button" onClick={props.onClose} ></button>
      </div>
    </div>
  )
}

export default ImagePopup
