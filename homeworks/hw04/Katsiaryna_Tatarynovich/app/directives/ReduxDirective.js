import formActions from '../actions/filterFormActions';

export class ReduxDirective {
    constructor($ngRedux) {
        $ngRedux.connect(this.mapStateToThis, formActions)(this);
    }
}
