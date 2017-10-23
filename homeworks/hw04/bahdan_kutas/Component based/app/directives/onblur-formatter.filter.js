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
            return this.filter('number')(value);
        }
        return value;
    }
    unformatter(value) {
        if (value) {
            return value.replace(/[^0-9\.]/g, '');
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
