import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {showModal, setTypeRate, setErrors} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';


class NavBar extends Component{
    openModalHandler() {
        this.props.setTypeRate('');
        this.props.setErrors('');
        this.props.showModal(true);
        yaCounter44418460.reachGoal('FIVE-ERRORS-CALLBACK');
        return true;
    }

    render() {
        return(
            <nav className="container nav">
                <div className="nav__logo"><a href="http://sales-generator.ru"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></a></div>
                <h2 className="nav__title">Агентство интернет-маркетинга</h2>
                <a className="nav__tel" href="tel:88003331293">8 (800) 333 12 93</a>
                <button className="btn btn--callback btn__header nav__call" onClick={this.openModalHandler.bind(this)}>Заказать звонок</button>
            </nav>
        );
    };
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, setTypeRate, setErrors}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(NavBar);