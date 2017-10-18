import { combineReducers } from 'redux';

import formReducer from './form.reducer';
import inputReducer from './input.reducer';

const rootReducer = combineReducers({
    formReducer,
    inputReducer,
});

export default rootReducer;
