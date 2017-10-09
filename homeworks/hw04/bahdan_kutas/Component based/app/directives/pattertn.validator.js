let patternValidator = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            let defaultPattern = /^\d+$/;
            ngModel.$validators.patternValidator = (modelValue, viewValue) => {
                if(!ngModel.$touched) {
                    return true;
                } else if (attr.patternValidator) {
                    return new RegExp(attr.patternValidator).test(viewValue);
                } else {
                    return defaultPattern.test(viewValue);
                }
            }
        }
    }
};

export default patternValidator;