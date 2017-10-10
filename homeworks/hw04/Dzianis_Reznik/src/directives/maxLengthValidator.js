export default class MaxLengthValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$parsers.unshift((viewValue) => {
        ngModel.$setValidity('maxLength', ((ngModel.$isEmpty(viewValue)) || (viewValue.length <= attr.maxLength)));
        return viewValue;
      });
      ngModel.$formatters.unshift((modelValue) => {
        ngModel.$setValidity('maxLength', ((ngModel.$isEmpty(modelValue)) || (modelValue.length <= attr.maxLength)));
        return modelValue;
      });
    }
  }
}
