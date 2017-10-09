let maxLengthValidator = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            ngModel.$validators.maxLengthValidator = (modelValue, viewValue) => {
                if (!ngModel.$touched) {
                    return true;
                } else if (viewValue.length <= parseInt(attr.maxLengthValidator)) {
                    return true;
                } else return false;
            }
        }
    }
};

export default maxLengthValidator;