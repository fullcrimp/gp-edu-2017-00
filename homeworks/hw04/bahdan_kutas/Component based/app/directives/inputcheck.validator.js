export default class InputCheckValidator {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    formatter(value) {
        return value.replace(/[^0-9\.]/g, '').slice(0, 8);
    }
    link(scope, element, attr, ngModel) {
        element.on('input', () => {
            ngModel.$setViewValue(this.formatter(ngModel.$viewValue));
            ngModel.$render();
        });
    }
}
