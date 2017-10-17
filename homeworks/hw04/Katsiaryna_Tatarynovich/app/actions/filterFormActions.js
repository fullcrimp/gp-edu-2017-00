import { TODOS } from '../constants/actionTypes';

const setPriceFieldStatus = (value, error, isValid) => {
    return {
        type: TODOS.THE_FIELD_PRICE_STATUS,
        value: value,
        payload: error,
        isValid: isValid
    }
}

export default { setPriceFieldStatus };
