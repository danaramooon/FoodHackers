import React, { Component } from 'react';
import logo from '../../images/logo.png';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

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
                <Link to="/registration/" className="authorization-link authorization-link--style">Регистрация</Link>
                <Link to="/authorization/" className="authorization-link authorization-link--style">Войти</Link>
              </div>
            </div>
            <div className="header-end header__header-end">
              <div className="logo-wrapper">    
                <img src={logo} alt="" class = "logo logo-wrapper__logo logo--style"/>
              </div>
              <nav className = "header-nav header-end__header-nav">

                <NavLink to ="/recept/" className="header-nav__link header-nav__link--style" activeClassName = "header-nav__link--selected">Рецепты</NavLink>
                <NavLink to ="/forum/" className="header-nav__link header-nav__link--style" activeClassName = "header-nav__link--selected">Форум</NavLink>
                <NavLink to ="/favourite/" className="header-nav__link header-nav__link--style" activeClassName = "header-nav__link--selected">Избранные</NavLink>
                <NavLink to ="/checkbox/" className="header-nav__link header-nav__link--style" activeClassName = "header-nav__link--selected">Подбери свой рецепт</NavLink>
              </nav>
            </div>
          </header>
      );
    }
  }
  
  export default Header;