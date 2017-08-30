import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setOpacity} from './../actions/index';

class ButtonToTop extends React.Component{
    constructor(props) {
        super();
        this.setOpacity = props.setOpacity;
    }
    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset >= 1200) {
                this.setOpacity('0.8');
                this.refs.btn.style = "pointer-events: auto; cursor: pointer;";
            } else {
                this.setOpacity('0');
                this.refs.btn.style = "pointer-events: none; cursor: default;";
            }
        }
    }

    scrollToTopHandler(e) {
        e.preventDefault();
        let position = window.pageYOffset;
        setInterval(() => {
            if (position > 0) {
                position -= 150;
                window.scrollTo(0,position);
            }
            return false;
        }, 30);
    }
    render() {
        return(
            <aside className="top-button-block"  style={{opacity: `${this.props.opacity}`}}>
                <div className="top-button" ref="btn" onClick={this.scrollToTopHandler.bind(this)}></div>
            </aside>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        opacity: store.salesReducer.opacity
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setOpacity}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonToTop);