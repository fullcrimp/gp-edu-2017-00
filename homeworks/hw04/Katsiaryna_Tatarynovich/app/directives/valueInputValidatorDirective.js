'use strict';

const valueInputValidatorDirective = ($filter) => {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '='
        },
        link: (scope, element, attr, ngModel) => {
            const updateView = (value) => {
                ngModel.$viewValue = value;
                ngModel.$render();
            };

            ngModel.$validators.isFutureInput = (modelValue, viewValue) => {
                let priceValue = Number(modelValue);
                let filterPriceValue = $filter('number')(priceValue);

                element.on('focus', () => updateView(modelValue));
                element.on('blur', () => updateView(filterPriceValue));
            };
        }
    };
};

angular
    .module('app')
    .directive('valueInputValidator', ['$filter', valueInputValidatorDirective]);
