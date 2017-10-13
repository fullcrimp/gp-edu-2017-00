import { TODOS } from '../constants/actionTypes';

export class ReduxService {
    setPriceFieldStatus(todo) {
        return {
            type: TODOS.THE_FIELD_PRICE_STATUS,
            payload: todo
        }
    }
}
