export default class RangeValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link(scope, element, attr, ngModel) {
        const range = attr.rangeValidator.split(';').map(el => parseInt(el, 10));
        ngModel.$validators.rangeValidator = (modelValue, viewValue) => {
            if (!ngModel.$dirty) {
                return true;
            } else if (parseInt(viewValue, 10) >= range[0] && parseInt(viewValue, 10) <= range[1]) {
                return true;
            } return false;
        };
    }
}
