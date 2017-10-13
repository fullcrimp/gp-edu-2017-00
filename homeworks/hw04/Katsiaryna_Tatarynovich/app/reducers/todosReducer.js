import { TODOS } from '../constants/actionTypes';

const initialState = {
    valid: false
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODOS.THE_FIELD_PRICE_STATUS:
            return { ...state, valid: action.payload };
            // return Object.assign({}, state, {valid: action.payload});
        default:
            return state;
    }
}
