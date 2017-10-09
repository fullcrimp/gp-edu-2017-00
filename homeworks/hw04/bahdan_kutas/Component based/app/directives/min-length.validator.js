const minLengthValidator = () => ({
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attr, ngModel) => {
        ngModel.$validators.minLengthValidator = (modelValue, viewValue) => {
            if (ngModel.$pristine) {
                return true;
            } else if (viewValue.length >= parseInt(attr.minLengthValidator, 10)) {
                return true;
            } return false;
        };
    },
});

export default minLengthValidator;
