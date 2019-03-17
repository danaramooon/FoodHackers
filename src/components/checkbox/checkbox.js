import React, { Component } from 'react';
import './checkbox.css';

class CheckBox extends Component {
    render() {
        return (
            <div>
                <h2 class = "select_products_title">Выберите продукты</h2>
                <div class = "check_containers">
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Мука
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Говядина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Масло
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Лук
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Картофель
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Мука
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Яйцо
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Чеснок
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="check">
                    <div class="col-lg-2 col-md-4 col-md-6">
                        <label class="check_container">Баранина
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <a href = "/favourite/"><button type="button" class="btn-secondary">Подобрать рецепт</button></a>
            </div>
        </div>
    
        );
    }
}
export default CheckBox;
