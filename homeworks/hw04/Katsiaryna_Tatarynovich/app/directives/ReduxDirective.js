import filterFormActions from '../actions/filterFormActions.js';

export class ReduxDirective {
    constructor() {
        this.restrict = 'A';
        this.controllerAs = '$ctrl';
    }

    controller($ngRedux) {
        $ngRedux.connect(this.mapStateToThis, filterFormActions)(this);
    }
}
