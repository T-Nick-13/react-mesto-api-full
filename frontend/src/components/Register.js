import React, { useState } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';

function Register({onRegister}) {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(data)
  }

  return(
    <div className="page-auth">
      <Header headerRoute="/sign-in" headerLink="Войти" headerClass="header__link" />
      <div className="auth">
        <p className="auth__heading">Регистрация</p>
        <form onSubmit={handleSubmit} className="auth__form">
          <input id="username" className="auth__input" required name="email" type="email"
            value={data.username} onChange={handleChange} placeholder="Email" />
          <input id="password" className="auth__input" required name="password" type="password"
            value={data.password} onChange={handleChange} placeholder="Пароль" />
          <button type="submit" className="auth__btn">Зарегистрироваться</button>
          <p className="auth__text">Уже зарегистрированы?&nbsp;
            <Link to="/sign-in" className="auth__link">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
