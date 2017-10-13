import { TODOS } from '../constants/actionTypes';

const setPriceFieldStatus = (todo) => {
    return {
        type: TODOS.THE_FIELD_PRICE_STATUS,
        payload: todo
    }
}

// const leavePriceFieldEmpty = (todo) => {
//     return {
//         type: TODOS.THE_FIELD_PRICE_IS_EMPTY,
//         payload: todo
//     }
// }

export default { setPriceFieldStatus };
