'use strict';

const maxLengthValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const maxLength = attr.maxLength;

            ngModel.$validators.maxLength = (modelValue, viewValue) => {
                return (maxLength < 0) || ngModel.$isEmpty(modelValue) || (modelValue.length <= maxLength);
            };
        }
    };
};

export default maxLengthValidatorDirective;
