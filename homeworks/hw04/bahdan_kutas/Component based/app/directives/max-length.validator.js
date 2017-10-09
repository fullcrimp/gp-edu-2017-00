const maxLengthValidator = () => ({
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attr, ngModel) => {
        ngModel.$validators.maxLengthValidator = (modelValue, viewValue) => {
            if (ngModel.$pristine) {
                return true;
            } else if (viewValue.length <= parseInt(attr.maxLengthValidator, 10)) {
                return true;
            } return false;
        };
    },
});

export default maxLengthValidator;
