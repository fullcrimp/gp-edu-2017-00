'use strict';

const valueInputValidatorDirective = ($filter) => {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: (scope, element, attr, ngModel) => {
            const numberMinValue = attr.minValue;
            const numberMaxValue = attr.maxValue;
            const patternValue = new RegExp(attr.customPattern);
            const updateView = (value) => {
                ngModel.$viewValue = value;
                ngModel.$render();
            };

            ngModel.$validators.isFutureDate = (modelValue, viewValue) => {
                let priceValue = Number(modelValue);
                let filterPriceValue = $filter('number')(priceValue);
                let status = true;

                if (priceValue < numberMinValue) {
                    ngModel.$setValidity('minValueValidator', false);
                } else {
                    ngModel.$setValidity('minValueValidator', true);
                }

                if (priceValue > numberMaxValue) {
                    ngModel.$setValidity('maxValueValidator', false);
                } else {
                    ngModel.$setValidity('maxValueValidator', true);
                }

                if (priceValue === null) {
                    ngModel.$setValidity('isValueValidator', false);
                } else {
                    ngModel.$setValidity('isValueValidator', true);
                }

                if (!patternValue.test(priceValue) && priceValue !== 'undefined') {
                    ngModel.$setValidity('patternValueValidator', false);
                } else {
                    ngModel.$setValidity('patternValueValidator', true);
                }

                element.on('focus', () => updateView(modelValue));
                element.on('blur', () => updateView(filterPriceValue));

                return status;
            };
        }
    };
};

angular
    .module('app')
    .directive('valueInputValidator', ['$filter', valueInputValidatorDirective]);
