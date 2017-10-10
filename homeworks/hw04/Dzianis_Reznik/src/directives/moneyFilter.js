export default class MoneyFilter {
  constructor($filter) {
    function format(value) {
      if (value) return $filter('number')(value);
    }

    function unformat(value) {
      if (value) return value.replace(/,/g, '';
      }

      this.restrict = 'A';
      this.require = 'ngModel';
      this.link = (scope, element, attr, ngModel) => {
        element.on('blur', () => {
          ngModel.$setViewValue(format(ngModel.$viewValue));
          ngModel.$render();
        });
        element.on('focus', () => {
          ngModel.$setViewValue(unformat(ngModel.$viewValue));
          ngModel.$render();
        })
      }
    }
  }
