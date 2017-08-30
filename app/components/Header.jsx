import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderContent from './HeaderContent';

class Header extends Component{
    render() {
        return(
            <header className="header">
                <HeaderContent/>
            </header>
        )
    }
}

export default Header;