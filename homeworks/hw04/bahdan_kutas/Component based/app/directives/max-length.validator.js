export default class MaxLengthValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link(scope, element, attr, ngModel) {
        ngModel.$validators.maxLengthValidator = (modelValue, viewValue) => {
            if (!ngModel.$dirty) {
                return true;
            } else if (viewValue.length <= parseInt(attr.maxLengthValidator, 10)) {
                return true;
            } return false;
        };
    }
}

