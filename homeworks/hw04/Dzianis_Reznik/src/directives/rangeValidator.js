export default class RangeValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$parsers.unshift((viewValue) => {
        viewValue = parseInt(viewValue);
        ngModel.$setValidity('range', (!(ngModel.$isEmpty(viewValue)) && (viewValue <= parseInt(attr.range.split(
          ',')[1])) && (viewValue >= parseInt(attr.range.split(',')[0]))));
        return viewValue;
      });
      ngModel.$formatters.unshift((modelValue) => {
        modelValue = parseInt(modelValue);
        ngModel.$setValidity('range', (!(ngModel.$isEmpty(modelValue)) && (modelValue <= parseInt(attr.range.split(
          ',')[1])) && (modelValue >= parseInt(attr.range.split(',')[0]))));
        return modelValue;
      });
    }
  }
}
