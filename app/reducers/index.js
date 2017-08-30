import { combineReducers } from 'redux';

import salesReducer from './sales.app.reducer';

const reducers = combineReducers({
    salesReducer: salesReducer
});

export default reducers;