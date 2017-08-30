import {requestCallback} from '../utils/ajax';

/*CONSTANTS*/
export const GET_MODAL_FORM = 'showModal';
export const SEND_MESSAGE_SUCCESS = 'sendRequestCallback';
export const SEND_CLIENTS_SUCCESS = 'knowClients';
export const RATE_TYPE = 'setTypeRate';
export const AUDITS_REQUEST = 'setTypeAudit';
export const NULL_CALLBACKS = 'nullCallbacks';
export const SCROLLER_OPACITY = 'setOpacity';
export const FIVE_ERRORS_FORM = 'setErrors';

/*ACTIONS*/

export const setErrors = (value) => {
    return {
        type: FIVE_ERRORS_FORM,
        payload: value
    }
};


export const setOpacity = (opacity) => {
        return {
            type: SCROLLER_OPACITY,
            opacity: opacity
        }
};

export const showModal = (logicValue) => {
  return{
      type: GET_MODAL_FORM,
      show: logicValue
  }
};


export const setTypeRate = type => {
    return{
        type: RATE_TYPE,
        payload: type
    }    
};

export const setTypeAudit = type => {
    return{
        type: AUDITS_REQUEST,
        payload: type
    }
};

export const nullCallbacks = (val1, val2) => {
   return{
       type: NULL_CALLBACKS,
       valOne: val1,
       valTwo: val2
   }
};

/*ASYNC ACTIONS*/

export const sendRequestCallback = (response) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: response
    }
};

export const knowClients = (response) => {
    return {
        type: SEND_CLIENTS_SUCCESS,
        payload: response
    }
};


export const sendClientsCallback = formData => {
    return dispatch => {
        return requestCallback('./send_mail.php', formData)
            .then(json => {
                dispatch(knowClients(json));
            })
            .catch(err => console.log('error'));
    }
};

export const sendCallback = formData => {
    return dispatch => {
        return requestCallback('./send_mail.php', formData)
            .then(json => {
                dispatch(sendRequestCallback(json));
            })
            .catch(err => console.log('error'));
    }
};


