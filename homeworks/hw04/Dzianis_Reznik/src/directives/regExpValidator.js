export default class RegExpValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$parsers.unshift((viewValue) => {
        let regexp = new RegExp(attr.regexp.slice(1, attr.regexp.length - 1));
        ngModel.$setValidity('regexp', regexp.test(viewValue));
        return viewValue;
      });
      ngModel.$formatters.unshift((modelValue) => {
        let regexp = new RegExp(attr.regexp.slice(1, attr.regexp.length - 1));
        ngModel.$setValidity('regexp', regexp.test(modelValue));
        return modelValue;
      });
    }
  }
}
