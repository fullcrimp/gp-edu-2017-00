'use strict';

export class FormatInputDirective {
    constructor($filter) {
        this.restrict = 'A';
        this.require = 'ngModel';
        this.$filter = $filter;
    }

    link(scope, element, attr, ngModel) {
        const updateView = (value) => {
            ngModel.$viewValue = value;
            ngModel.$render();
        };

        ngModel.$validators.formatInput = (modelValue, viewValue) => {
            let priceValue = viewValue;

            if (Number(priceValue)) {
                priceValue = this.$filter('number')(Number(priceValue));
            }

            element.on('focus', () => updateView(viewValue));
            element.on('blur', () => updateView(priceValue));

            return true;
        };
    }
}
