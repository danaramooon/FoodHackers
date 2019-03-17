import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

import './header.css';

function Navbar() {
    return (
      <ul>
        <li><a href="/login/">Login</a></li>
        {/* <li><Link to="/about/">About</Link></li> */}
      </ul>
    );
  }
  
  
  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }
  
    onLogin = () => {
      this.setState({
        isLoggedIn: true
      })
    }
  
    onLogout = () => {
      this.setState({
        isLoggedIn: false
      })
    }
    
    render() {
      return (
        <header className="header">
          <div className="header-begin header-begin--style header__header-begin">
            <div className="authorization header-begin__authorization">
              <a href="" className="authorization-link authorization-link--style">Регистрация</a>
              <a href="" className="authorization-link authorization-link--style">Войти</a>
            </div>
          </div>
          <div className="header-end header__header-end">
            <div className="logo-wrapper">    
			      	<img src={logo} alt="" class = "logo logo-wrapper__logo logo--style"/>
            </div>
            <nav className = "header-nav header-end__header-nav">
              <a href="/recept/" className="header-nav__link header-nav__link--style header-nav__link--selected">Рецепты</a>
              <a href="" className="header-nav__link header-nav__link--style">Форум</a>
              <a href="" className="header-nav__link header-nav__link--style">Авторы</a>
              <a href="/favourite/" className="header-nav__link header-nav__link--style">Избранные</a>
              <a href="/checkbox/" className="header-nav__link header-nav__link--style">Подбери свой рецепт</a>
            </nav>
          </div>
        </header>
      );
    }
  }
  
  export default Header;