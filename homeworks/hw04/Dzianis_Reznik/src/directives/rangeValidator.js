function RangeValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      ngModel.$parsers.unshift(function(viewValue) {
        viewValue = Number(viewValue);
        ngModel.$setValidity('range', (!(ngModel.$isEmpty(viewValue)) && (viewValue <= Number(attr.range.split(',')[1])) && (viewValue >= Number(attr.range.split(',')[0]))));
        return viewValue;
      });
      ngModel.$formatters.unshift(function(modelValue) {
        modelValue = Number(modelValue);
        ngModel.$setValidity('range', (!(ngModel.$isEmpty(modelValue)) && (modelValue <= Number(attr.range.split(',')[1])) && (modelValue >= Number(attr.range.split(',')[0]))));
        return modelValue;
      });
    }
  }
}

export default RangeValidator;
