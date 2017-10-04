'use strict';

const valueInputValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const numberMinValue = attr.minValue;
            console.log(attr);

            ngModel.$validators.isLessThanMinValue = (modelValue, viewValue) => {
                const priceValue = viewValue;
                console.log('modelValue ' + modelValue + '; ' + 'viewValue ' + viewValue);
                // return (priceValue < numberMinValue) ? true : false;
                if (priceValue < numberMinValue) {
                    ngModel.$setValidity('minValueValidator', false);
                } else {
                    ngModel.$setValidity('minValueValidator', true);
                }
            };
        }
    };
};

angular
    .module('app')
    .directive('valueInputValidator', valueInputValidatorDirective);
