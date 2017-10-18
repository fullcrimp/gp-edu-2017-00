import { TODOS } from '../constants/actionTypes';

const setFormFilterStatus = (error, isValid, isSubmitted) => {
    return {
        type: TODOS.THE_FORM_FILTER_STATUS,
        payload: {
            error: error,
            isValid: isValid,
            isSubmitted: isSubmitted
        }
    }
}
const setPriceFieldStatus = (value, error, isValid) => {
    return {
        type: TODOS.THE_FIELD_PRICE_STATUS,
        payload: {
            value: value,
            error: error,
            isValid: isValid
        }
    }
}
const setPasswordFieldStatus = (error, isValid) => {
    return {
        type: TODOS.THE_FIELD_PASSWORD_STATUS,
        payload: {
            error: error,
            isValid: isValid
        }
    }
}

export default { setFormFilterStatus, setPriceFieldStatus, setPasswordFieldStatus };
