import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../actions/index';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar.jsx';
import SocialLikes from './SocialLikes'

class HeaderContent extends Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'five-errors'};
        formData.email = this.refs.email.value;
        this.props.sendClientsCallback(formData);
        yaCounter44418460.reachGoal('FIVE-ERRORS-GET');
        return true;
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="free-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="free-form__notification free-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <div>
                <section className="header-content-background">
                    <div className="content--background">
                        <NavBar/>
                        <div className="container header__content">
                            <div className="header__content-item">
                                <img src="images/best-sale.png" alt="Заказать чек-лист: Генератор продаж" title="Заказать чек-лист: Генератор продаж"/>
                            </div>
                            <div className="header__content-item">
                                <h1 className="header__content-title">
                                    <span>5</span> самых распространённых ошибок,
                                </h1>
                                <h2 className="title-h2">
                                    которые убивают Ваши продажи на сайте
                                </h2>
                                <h2 className="title-h2">
                                    <span>Используйте данное руководство<br/>
                                    и увеличьте Ваши продажи до 70%!</span>
                                </h2>
                                <div className="header__content-form">
                                    <p className="header__content-text">
                                        Для получения данного чек-листа, заполните
                                        форму ниже и мы вышлем его Вам на почту
                                    </p>
                        {this.clientsNotification()}
                        <form className="form-group free-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                            <input type="email" ref="email" className="form-control" placeholder="Введите Ваш email*"  required/>
                            <input type="submit" className="btn"  value="Получить бесплатно"/>
                        </form>
                                    <p className="header__content-confirm">
                                        Нажимая кнопку "Получить бесплатно", я даю свое
                                        согласие на обработку моих персональных данных
                                    </p>
                                    <SocialLikes/>
                                </div>
                            </div>
                            {/*<div className="social-likes">
                                <div className="facebook" title="Поделиться ссылкой на Фейсбуке">Facebook</div>
                                <div className="twitter" title="Поделиться ссылкой в Твиттере">Twitter</div>
                                <div className="mailru" title="Поделиться ссылкой в Моём мире">Мой мир</div>
                                <div className="vkontakte" title="Поделиться ссылкой во Вконтакте">Вконтакте</div>
                                <div className="odnoklassniki" title="Поделиться ссылкой в Одноклассниках">Одноклассники</div>
                                <div className="plusone" title="Поделиться ссылкой в Гугл-плюсе">Google+</div>
                            </div>*/}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
