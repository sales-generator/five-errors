import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks, setInclude} from '../actions/index';
import { bindActionCreators } from 'redux';

class MobileModalForm extends Component{
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
            if (!this.props.formState.includeAudit) {
                formData = {'form-name': 'callback'};
                for (let field in this.refs) {
                    formData[field] = this.refs[field].value;
                }
            } else {
                formData = {'form-name': 'include-audit'};
                formData.email = this.refs.email.value;
                formData.phone = this.refs.phone.value;
            }
            this.props.sendCallback(formData);
        } else if(this.props.formState.typeRate && !this.props.formState.auditType) {
            let formData = {'form-name': 'rates', 'rate': this.props.formState.typeRate};
            for (let field in this.refs) {
                formData[field] = this.refs[field].value;
            }
            this.props.sendCallback(formData);
        } else if(!this.props.formState.typeRate && this.props.formState.auditType) {
            let formData = {'form-name': 'audits', 'type': this.props.formState.auditType};
            for (let field in this.refs) {
                formData[field] = this.refs[field].value;
            }
            this.props.sendCallback(formData);
        }
    }

    closeModalHandler(e) {
        e.stopPropagation();
        if (!this.props.formState.includeAudit) {
            for (let fieldClear in this.refs) {
                this.refs[fieldClear].value = '';
            }
        } else {
            this.refs.email.value = '';
            this.refs.phone.value = '';
        }
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.setInclude(false);
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
                    {this.props.formState.includeAudit ? <p className="alternative">Оставьте Ваши контакты и мы отправим Вам пример на электронную почту</p> :<p>Оформление заявки</p>}
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        {this.props.formState.includeAudit ? <label>Ваш Email <span>*</span></label> : <label>Во сколько Вам позвонить?</label>}
                        {this.props.formState.includeAudit ?
                            <input type="email" ref="email" required="true" className="form-control" placeholder="Email"/> :
                            <input  placeholder="11:11" type="text" ref="callback" name="callback" className="form-control" required={true}/>}
                        <label>Телефон <span>*</span></label>
                        <input  placeholder="+7(___) ___ __ __" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        <div className="personal-data">
                            <input type="checkbox" className="form-control" required defaultChecked={true}/><p>Согласен на обработку <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf">персональных данных</a></p>
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
    return bindActionCreators({showModal, sendCallback, nullCallbacks, setInclude}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileModalForm);
