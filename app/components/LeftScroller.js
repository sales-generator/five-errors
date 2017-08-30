import React from 'react';


class LeftScroller extends React.Component{
    scrollerBtnClickHandler(event) {
        event.preventDefault();
        event.target.className += ' scroller__button--active';
    };

    render() {
        return(
            <section className="scroller">
                <a href="#"><div className="scroller__button" ref="item-1" onClick={this.scrollerBtnClickHandler.bind(this)}></div></a>
                <a href="#"><div className="scroller__button" ref="item-2" onClick={this.scrollerBtnClickHandler.bind(this)}></div></a>
                <a href="#"><div className="scroller__button" ref="item-3" onClick={this.scrollerBtnClickHandler.bind(this)}></div></a>
                <a href="#"><div className="scroller__button" ref="item-4" onClick={this.scrollerBtnClickHandler.bind(this)}></div></a>
                <a href="#"><div className="scroller__button" ref="item-5" onClick={this.scrollerBtnClickHandler.bind(this)}></div></a>
            </section>
        )
    }
}

export default LeftScroller;