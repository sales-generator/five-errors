import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks, setErrors} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class ModalForm extends Component{
    isShow() {
        if (this.props.formState.modalShow) {
             return {
                 display: 'block',
                 animation: 'popupAnimOpen 0.4s 1 linear'
             };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }

    mailNotification() {
        let response = this.props.formState.responseJson;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="popup-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="popup-form__notification popup-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
         return notification(response);
        } else {
            return false;
        }
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        if (!this.props.formState.typeRate && !this.props.formState.auditType) {
            let formData = {};
            if (!this.props.formState.fiveErrors) {
                formData = {'form-name': 'callback'};
                formData.name = this.refs.name.value;
                formData.phone = this.refs.phone.mask.getValue();
            }
            this.props.sendCallback(formData);
        }
    }

    closeModalHandler(e) {
        e.stopPropagation();
        if (!this.props.formState.fiveErrors) {
            this.refs.name.value = '';
            this.refs.phone.mask.setValue('');
        } else {
            this.refs.name.value = '';
            this.refs.phone.mask.setValue('');
        }
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.setErrors(false);
    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showModal(true);
    }

    render() {
        return(
            <div className="popup-overlay" style={this.isShow()} onClick={this.closeModalHandler.bind(this)}>
              <div className="popup-form">
                  <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                  <p>Оформление заявки</p>
                  {this.mailNotification()}
                  <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                      <label>Ваше имя <span>*</span></label>
                      <input type="text" ref="name" required="true" className="form-control" placeholder="Ваше имя *"/>
                      <label>Телефон <span>*</span></label>
                      <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                      <div className="personal-data">
                          <input type="checkbox" className="form-control" required defaultChecked/><p>Согласен на обработку <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf">персональных данных</a></p>
                      </div>
                      <input type="submit" value='Отправить заявку!' className="btn"/>
                  </form>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, sendCallback, nullCallbacks, setErrors}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
