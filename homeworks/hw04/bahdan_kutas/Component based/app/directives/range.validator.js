export default class RangeValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link(scope, element, attr, ngModel) {
        const range = attr.rangeValidator.split(';').map(el => parseInt(el, 10));
        ngModel.$validators.rangeValidator = (modelValue, viewValue) => {
            if (viewValue && ngModel.$dirty) {
                const value = parseInt(viewValue.split(',').join(''), 10);
                if (value >= range[0] && value <= range[1]) {
                    return true;
                } return false;
            }
            return true;
        };
    }
}
