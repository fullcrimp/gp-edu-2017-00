let minMaxValidator = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            let minMaxArr = attr.minMaxValidator.split(';').map((el) => {
                return parseInt(el);
            });
            ngModel.$validators.minMaxValidator = (modelValue, viewValue) => {
                if(!(viewValue || modelValue)) {
                    return null;
                } else if(viewValue.length >= minMaxArr[0] && viewValue.length <= minMaxArr[1]) {
                    return true;
                } else return false;
            }
        }
    }
};

export default minMaxValidator;