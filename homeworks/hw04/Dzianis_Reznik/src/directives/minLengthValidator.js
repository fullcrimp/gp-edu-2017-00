export default class MinValueValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$parsers.unshift((viewValue) => {
        ngModel.$setValidity('minLength', (!(ngModel.$isEmpty(viewValue)) && (viewValue.length >= attr.minLength)));
        return viewValue;
      });
      ngModel.$formatters.unshift((modelValue) => {
        if (ngModel.$isEmpty()) ngModel.$setValidity('minLength');
        ngModel.$setValidity('minLength', (!(ngModel.$isEmpty(modelValue)) && (modelValue.length >= attr.minLength)));
        return modelValue;
      });
    }
  }
}
