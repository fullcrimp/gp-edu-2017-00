'use strict';

const minLengthValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const minLength = attr.minLength;

            ngModel.$validators.minLength = (modelValue, viewValue) => {
                return ngModel.$isEmpty(modelValue) || modelValue.length >= minLength;
            };
        }
    };
};

export default minLengthValidatorDirective;
