import React, { Component } from 'react';
import {showModal, openSlider, setTypeRate, setInclude} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';


class IncludeAudit extends Component{
    showModalHandler(){
        this.props.setTypeRate('');
        this.props.showModal(true);
        this.props.setInclude(true);
        yaCounter44418460.reachGoal('KNOW_AMOUNT');
        return true;
    }
    showSliderHandler() {
        let array = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
        this.props.openSlider(array ,true);
    }
    render() {
    return(
     <ScrollableAnchor id={'audit-includes'}>
         <section className="include">
             <div className="include-wrapper">
               <div className="separatortop">
                     <svg id="triangle" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 H 0 L 50 0 L 100 100 H 100 V 0 Z" ></path></svg>
               </div>
               <div className="container">
                   <h2 className="include__title">Что включает в себя аудит:</h2>
                   <div className="include-materials">
                       <div className="include-materials__list">
                           <p className="list-item"><img src="images/grow.svg"/>47 рекомендаций по увеличению посещаемости и продаж с Вашего сайта</p>
                         <p className="list-item"><img src="images/questions.svg"/>Полное и четкое понимание всех плюсов и минусов Вашего сайта</p>
                         <p className="list-item"><img src="images/search.svg"/>Анализ ошибок внутренней и внешней оптимизации сайта</p>
                           <p className="list-item"><img src="images/gauge.svg"/>Оценка потенциала Вашего сайта для дальнейшего продвижения в ТОП-10</p>
                           <p className="list-item"><img src="images/list.svg"/>12 шагов, которые дадут максимальный эффект в краткосрочном периоде</p>
                       </div>
                       <div className="include-materials__desc">
                           <div>
                               <img src="images/pages-audit.png" alt="Примеры работ" title="Примеры работ" onClick={this.showSliderHandler.bind(this)}/>
                           </div>
                       </div>
                   </div>
                   <button className="btn" onClick={this.showModalHandler.bind(this)}>Скачать пример рекомендаций из аудита <br/> <span>PDF 2.25 МБ</span></button>
               </div>
             </div>
         </section>
     </ScrollableAnchor>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, openSlider, setTypeRate, setInclude}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IncludeAudit);
