import { reduxService } from '../services/ReduxService';

export class ReduxDirective {
    constructor($ngRedux) {
        $ngRedux.connect(this.mapStateToThis, reduxService)(this);
    }
}
