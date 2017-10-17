export default class MinLengthValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$validators.minLength = function(modelValue, viewValue) {
        if (viewValue) return (viewValue.length >= attr.minLength);
      }
    }
  }
}
