import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component {
    render() {
        return (
            <div class="sidenav_">
                <span >Категории блюд</span>
                <a href="#">Выпечка</a>
                <a href="#">Гарниры</a>
                <a href="#">Горячее</a>
                <a href="#">Десерты</a>
                <a href="#">Детское меню</a>
                <a href="#">Завтрак</a>
                <a href="#">Закуски</a>
                <a href="#">Мясное</a>
                <a href="#">Салаты</a>
        </div>
        );
    }
}
export default SideBar;