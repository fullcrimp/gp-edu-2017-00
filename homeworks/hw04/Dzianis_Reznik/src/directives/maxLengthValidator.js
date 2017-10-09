function MaxLengthValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      ngModel.$parsers.unshift(function(viewValue) {
        ngModel.$setValidity('maxLength', ((ngModel.$isEmpty(viewValue)) || (viewValue.length <= attr.maxLength)));
        return viewValue;
      });
      ngModel.$formatters.unshift(function(modelValue) {
        ngModel.$setValidity('maxLength', ((ngModel.$isEmpty(modelValue)) || (modelValue.length <= attr.maxLength)));
        return modelValue;
      });
    }
  }
}

export default MaxLengthValidator;
