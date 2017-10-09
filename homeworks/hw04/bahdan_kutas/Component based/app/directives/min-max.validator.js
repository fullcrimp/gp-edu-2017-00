const minMaxValidator = () => ({
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attr, ngModel) => {
        const minMaxArr = attr.minMaxValidator.split(';').map(el => parseInt(el, 10));
        ngModel.$validators.minMaxValidator = (modelValue, viewValue) => {
            if (!(viewValue || modelValue)) {
                return null;
            } else if (viewValue.length >= minMaxArr[0] && viewValue.length <= minMaxArr[1]) {
                return true;
            } return false;
        };
    },
});

export default minMaxValidator;
