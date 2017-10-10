export default class InputCheckValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    isNumeric(value) {
        return !isNaN(value - parseFloat(value));
    }
    formatter(value) {
        if (!this.isNumeric(value)) {
            return value.replace(/[^0-9\.]/g, '');
        }
        return value;
    }
    link(scope, element, attr, ngModel) {
        element.on('input', () => {
            let modValue = this.formatter(ngModel.$viewValue);
            element.val(modValue);
            ngModel.$viewValue = modValue;
        });
    }
}
