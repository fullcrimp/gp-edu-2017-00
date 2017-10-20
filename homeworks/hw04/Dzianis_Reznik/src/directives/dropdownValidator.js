export default class DropdownValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$validators.dropdownValidator = function(modelValue, viewValue) {
        return (viewValue);
      }
    }
  }
}
