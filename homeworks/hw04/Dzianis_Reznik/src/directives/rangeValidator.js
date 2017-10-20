export default class RangeValidator {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.link = (scope, element, attr, ngModel) => {
      ngModel.$validators.range = function(modelValue, viewValue) {
        let range = attr.range.split(',');
        if (viewValue) return (
          (parseInt(viewValue.replace(/,/g, '')) <= range[1]) &&
          (parseInt(viewValue.replace(/,/g, '')) >=
            range[0])
        );
      }
    }
  }
}
