import formActions from '../actions/form.actions';

export default class msmAppController {
    constructor($ngRedux) {
        $ngRedux.connect(null, formActions)(this);
    }
    mapStateToThis(state) {
        return {
            formState: state.formReducer,
            inputState: state.inputReducer,
        };
    }
}
