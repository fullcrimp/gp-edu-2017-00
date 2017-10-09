function RegExpValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      ngModel.$parsers.unshift(function(viewValue) {
        let regexp = new RegExp(attr.regexp.slice(1, attr.regexp.length - 1));
        ngModel.$setValidity('regexp', regexp.test(viewValue));
        return viewValue;
      });
      ngModel.$formatters.unshift(function(modelValue) {
        let regexp = new RegExp(attr.regexp.slice(1, attr.regexp.length - 1));
        ngModel.$setValidity('regexp', regexp.test(modelValue));
        return modelValue;
      });
    }
  }
}

export default RegExpValidator;
