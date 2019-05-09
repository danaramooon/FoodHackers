import React , {Component} from 'react';
import './registration.css';

class Registration extends Component{
    render() {
        return(
            <div className = "registration-wrapper">
                <form action="" method = "POST" className = "registration-form registration-wrapper__registration-form registration-form--style">
                    <div>
                        <h2 className = "registration-form__title">Регистрация</h2>
                        <input type="text" placeholder = "Login" name = "login" className = "registration-form__input registration-form__input--style"/>
                        <input type="password" placeholder = "Password" name = "password" className = "registration-form__input registration-form__input--style"/>
                        <input type="email" placeholder = "email" name = "email" className = "registration-form__input registration-form__input--style"/>
                        <input type="submit" value = "Зарегистрироваться" className = "registration-form__input registration-form__submit--style"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration;