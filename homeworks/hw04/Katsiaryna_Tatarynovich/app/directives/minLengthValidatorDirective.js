'use strict';

const minLengthValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const minLength = attr.minLength;

            ngModel.$validators.minLength = (modelValue, viewValue) => {
                return ngModel.$isEmpty(viewValue) || viewValue.length >= minLength;
            };
        }
    };
};

angular
    .module('app')
    .directive('minLength', minLengthValidatorDirective);
