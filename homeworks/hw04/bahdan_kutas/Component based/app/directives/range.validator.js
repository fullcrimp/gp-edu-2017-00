let rangeValidator = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            let range = attr.rangeValidator.split(';').map((el) => {
                return parseInt(el);
            });
            ngModel.$validators.rangeValidator = (modelValue, viewValue) => {
                if(!ngModel.$touched) {
                    return true;
                } else if (parseInt(viewValue) >= range[0] && parseInt(viewValue) <= range[1]) {
                    return true;
                } else return false;
            }
        }
    }
};

export default rangeValidator;