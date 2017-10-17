import { TODOS } from '../constants/actionTypes';

const initialState = {
    valid: false
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODOS.THE_FIELD_PRICE_STATUS:
            return { ...state, valid: action.isValid };
        case TODOS.THE_FIELD_PASSWORD_STATUS:
            return { ...state, valid: action.isValid };
        default:
            return state;
    }
}
