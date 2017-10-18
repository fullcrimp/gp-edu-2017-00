const formInitialState = {
    formValidity: false,
    formErrors: {},
    formState: false,
};

function formReducer(state = formInitialState, action) {
    switch (action.type) {
    case 'SET_FORM_VALIDITY': {
        return {
            ...state,
            formValidity: action.payload.valid,
            formErrors: action.payload.errors,
            formState: action.payload.submitted,
        };
    }
    default: return state;
    }
}

export default formReducer;

