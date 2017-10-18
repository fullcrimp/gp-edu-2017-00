import { TODOS } from '../constants/actionTypes';

const initialState = {
    isValidFilterForm: false,
    isFilterFormSubmitted: false,
    isValidPriceInput: false,
    isValidPasswordInput: false
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODOS.THE_FORM_FILTER_STATUS:
            return { ...state, isValidFilterForm: action.payload.isValid, isFilterFormSubmitted: action.payload.isSubmitted }
        case TODOS.THE_FIELD_PRICE_STATUS:
            return { ...state, isValidPriceInput: action.payload.isValid };
        case TODOS.THE_FIELD_PASSWORD_STATUS:
            return { ...state, isValidPasswordInput: action.payload.isValid };
        default:
            return state;
    }
}
