import {GET_MODAL_FORM, SEND_MESSAGE_SUCCESS, SEND_CLIENTS_SUCCESS, RATE_TYPE, AUDITS_REQUEST, NULL_CALLBACKS, SCROLLER_OPACITY, FIVE_ERRORS_FORM} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    responseJson: null,
    clientsResp: null,
    typeRate: '',
    opacity: '',
    auditType: '',
    fiveErrors: false
};

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case FIVE_ERRORS_FORM:
            return Object.assign({}, state, {fiveErrors: action.payload});
            break;
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
            break;
        case SCROLLER_OPACITY:
            return Object.assign({}, state, {opacity: action.opacity});
            break;
        case SEND_MESSAGE_SUCCESS:
            return Object.assign({}, state, {responseJson: action.payload});
            break;
        case SEND_CLIENTS_SUCCESS:
            return Object.assign({}, state, {clientsResp: action.payload});
            break;
        case RATE_TYPE:
            return Object.assign({}, state, {typeRate: action.payload});
            break;
        case AUDITS_REQUEST:
            return Object.assign({}, state, {auditType: action.payload});
            break;
        case NULL_CALLBACKS:
            return Object.assign({}, state, {responseJson: action.valOne, clientsResp: action.valTwo});
            break;
        default: return state;
    }
};

export default salesReducer;