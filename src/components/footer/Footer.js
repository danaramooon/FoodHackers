import React, { Component } from 'react';
import { Link } from "react-router-dom";


import './footer.css';

  
  class Footer extends Component {
    
    render() {
      return (
        <footer class = "footer body__footer footer--style">
						<div class = "footer-element footer__footer-element footer-element--style">
							<h4 class = "footer-element__title">
								Контакты
							</h4>
							<div class = "footer-element__content">
								Толе би, 59,
								Алмалинский район, Алматы
							</div>
						</div>
						<div class = "footer-element footer__footer-element footer-element--style">
							<h4 class = "footer-element__title">
								О нас
							</h4>
							<div class = "footer-element__content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius in ad sequi architecto corporis dicta totam quos, tempore similique, fugit.
							</div>
						</div>
						<div class = "footer-element footer__footer-element footer-element--style">
							<h4 class = "footer-element__title">
								Соц сети
							</h4>
							<div class = "footer-element__content footer-element__content--social">
								<a href="https://vk.com/id199630092" class = "social-link fab fa-lg fa-vk"></a>
								<a href="https://www.instagram.com/yess_zhan/?hl=en" class = "social-link fab fa-lg fa-instagram"></a>
							</div>
						</div>
				</footer>
      );
    }
  }
  
  export default Footer;