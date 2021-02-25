import { Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="Лого Mesto"/>
        <div className="header__container">
          {props.children}
          <Link to={props.headerRoute} className={props.headerClass} onClick={props.handleSignOut}>{props.headerLink}</Link>
        </div>
    </header>
  )
}

export default Header;
