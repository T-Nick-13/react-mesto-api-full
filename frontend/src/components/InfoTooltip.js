import LogoRegistered from '../images/Registered.svg';
import LogoUnRegistered from '../images/UnRegistered.svg';

function infoTooltip(props) {

  return(
    <div className={`popup ${props.isOpen ? 'popup_active' : ''}`} >
      <div className="popup__container" >
        <img className="popup__regLogo" src={props.registered ? LogoRegistered : LogoUnRegistered } alt="Лого результат регистрации" />
        <p className="popup__RegText">{props.registered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </p>
        <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default infoTooltip;
