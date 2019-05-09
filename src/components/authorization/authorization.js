import React , {Component} from 'react';
import './authorization.css';

class Authorization extends Component{
    render() {
        return(
            <div className = "authorization-wrapper">
                <form action="" method = "POST" className = "authorization-form authorization-wrapper__authorization-form authorization-form--style">
                    <div>
                        <h2 className = "authorization-form__title">Вход в систему</h2>
                        <input type="text" placeholder = "Login" name = "login" className = "authorization-form__input authorization-form__input--style"/>
                        <input type="password" placeholder = "Password" name = "password" className = "authorization-form__input authorization-form__input--style"/>
                        <input type="submit" value = "Войти" className = "authorization-form__input authorization-form__submit--style"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Authorization;