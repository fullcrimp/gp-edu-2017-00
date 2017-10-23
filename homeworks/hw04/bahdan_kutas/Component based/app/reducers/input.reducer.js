const inputInitialState = {
    validity: false,
    validationErrors: {},
    value: '',
};

function inputReducer(state = inputInitialState, action) {
    switch (action.type) {
    case 'SET_VALIDITY': {
        return {
            ...state,
            validationErrors: action.payload.errors,
            validity: action.payload.validity,
            value: action.payload.value,
        };
    }
    default: return state;
    }
}

export default inputReducer;

