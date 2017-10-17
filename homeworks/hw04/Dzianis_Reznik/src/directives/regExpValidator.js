export default class RegExpValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$validators.regexp = function(modelValue, viewValue) {
        let regexp = new RegExp(attr.regexp.slice(1, attr.regexp.length - 1));
        if (viewValue) return (regexp.test(viewValue));
      }
    }
  }
}
