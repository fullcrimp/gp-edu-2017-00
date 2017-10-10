export default class MinLengthValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link(scope, element, attr, ngModel) {
        ngModel.$validators.minLengthValidator = (modelValue, viewValue) => {
            console.log(ngModel.$dirty);
            if (!ngModel.$dirty) {
                return true;
            } else if (viewValue.length >= parseInt(attr.minLengthValidator, 10)) {
                return true;
            } return false;
        };
    }
}
