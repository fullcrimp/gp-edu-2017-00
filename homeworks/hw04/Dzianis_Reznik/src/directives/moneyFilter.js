function MoneyFilter($filter) {

  function format(value) {
    if (value) return $filter('number')(value);
  }

  function unformat(value) {
    if (value) return value.replace(/D/g, '');
  }

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      element.on('blur', function() {
        element.val(format(ngModel.$viewValue));
      });
      element.on('focus', function() {
        element.val(unformat(ngModel.$viewValue));
      });
    }
  }
}

export default MoneyFilter;
