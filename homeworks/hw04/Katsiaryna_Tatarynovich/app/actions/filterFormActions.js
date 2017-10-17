import { TODOS } from '../constants/actionTypes';

const setPriceFieldStatus = (value, error, isValid) => {
    return {
        type: TODOS.THE_FIELD_PRICE_STATUS,
        value: value,
        payload: error,
        isValid: isValid
    }
}
const setPasswordFieldStatus = (error, isValid) => {
    return {
        type: TODOS.THE_FIELD_PASSWORD_STATUS,
        payload: error,
        isValid: isValid
    }
}

export default { setPriceFieldStatus, setPasswordFieldStatus };
