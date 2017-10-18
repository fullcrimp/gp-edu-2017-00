export default class MaxLengthValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$validators.maxLength = function(modelValue, viewValue) {
        if (viewValue) return (viewValue.replace(/,/g, '').length <= attr.maxLength)
        else return true;
      }
    }
  }
}
