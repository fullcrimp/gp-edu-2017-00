'use strict';

const patternValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const pattern = attr.customPattern;
            const regExp = new RegExp(pattern);

            ngModel.$validators.patternCheck = (modelValue, viewValue) => {
                return ngModel.$isEmpty(viewValue) || regExp.test(viewValue);
            };
        }
    };
};

angular
    .module('app')
    .directive('customPattern', patternValidatorDirective);
