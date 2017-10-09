'use strict';

const formatInputDirective = ($filter) => {
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

            ngModel.$validators.formatInput = (modelValue, viewValue) => {
                let priceValue = viewValue;

                if (Number(priceValue)) {
                    console.log('priceValue in if ' + priceValue);
                    priceValue = $filter('number')(Number(priceValue));
                }

                element.on('focus', () => updateView(modelValue));
                element.on('blur', () => updateView(priceValue));

                return true;
            };
        }
    };
};

export default formatInputDirective;
