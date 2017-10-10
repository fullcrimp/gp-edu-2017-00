export default class OnblurFormatter {
    constructor($filter) {
        this.restrict = 'A';
        this.require = 'ngModel';
        this.filter = $filter;
    }
    isNumeric(value) {
        return !isNaN(value - parseFloat(value));
    }
    formatter(value) {
        if (value && this.isNumeric(value)) {
            return this.filter('number')(parseInt(value, 10));
        }
        return value;
    }
    unformatter(value) {
        if (value && this.isNumeric(value)) {
            return parseInt(value.replace(/[^0-9\.]/g, ''), 10);
        }
        return value;
    }
    link(scope, element, attr, ngModel) {
        element.on('blur', () => {
            ngModel.$setViewValue(this.formatter(ngModel.$viewValue));
            ngModel.$render();
        });
        element.on('focus', () => {
            ngModel.$setViewValue(this.unformatter(ngModel.$viewValue));
            ngModel.$render();
        });
    }
}
