import React , {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className = "footer body__footer footer--style">
                    <div className = "footer-element footer__footer-element footer-element--style">
                        <h4 className = "footer-element__title">
                            Контакты
                        </h4>
                        <div className = "footer-element__content">
                            Толе би, 59,
                            Алмалинский район, Алматы
                        </div>
                    </div>
                    <div className = "footer-element footer__footer-element footer-element--style">
                        <h4 className = "footer-element__title">
                            О нас
                        </h4>
                        <div className = "footer-element__content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius in ad sequi architecto corporis dicta totam quos, tempore similique, fugit.
                        </div>
                    </div>
                    <div className = "footer-element footer__footer-element footer-element--style">
                        <h4 className = "footer-element__title">
                            Соц сети
                        </h4>
                        <div className = "footer-element__content footer-element__content--social">
                            <a href="https://vk.com/id199630092" className = "social-link fa fa-lg fa-vk"></a>
                            <a href="https://www.instagram.com/yess_zhan/?hl=en" className = "social-link fa fa-lg fa-instagram"></a>
                        </div>
                    </div>
            </footer>
        );
    }
}

export default Footer;