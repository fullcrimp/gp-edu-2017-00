function MinValueValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {

      ngModel.$parsers.unshift(function(viewValue) {
        ngModel.$setValidity('minLength', (!(ngModel.$isEmpty(viewValue)) && (viewValue.length >= attr.minLength)));
        return viewValue;
      });
      ngModel.$formatters.unshift(function(modelValue) {
        if (ngModel.$isEmpty()) ngModel.$setValidity('minLength');
        ngModel.$setValidity('minLength', (!(ngModel.$isEmpty(modelValue)) && (modelValue.length >= attr.minLength)));
        return modelValue;
      });
    }
  }
}

export default MinValueValidator;
