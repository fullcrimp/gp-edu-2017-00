import { TODOS } from '../constants/actionTypes';

class ReduxService {
    constructor() {

    }

    setPriceFieldStatus(todo) {
        return {
            type: TODOS.THE_FIELD_PRICE_STATUS,
            payload: todo
        }
    }
};

export default ReduxService;
