let minLengthValidator = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            ngModel.$validators.minLengthValidator = (modelValue, viewValue) => {
                if (ngModel.$pristine) {
                    return true;
                } else if (viewValue.length >= parseInt(attr.minLengthValidator)) {
                    return true;
                } else return false;
            }
        }
    }
};

export default minLengthValidator;