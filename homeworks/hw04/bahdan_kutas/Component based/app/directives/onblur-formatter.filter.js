let onblurFormatter = function($filter) {
    let isNumeric = function(value) {
        return !isNaN(value -parseFloat(value));
    }
    let formatter = function (value) {
        if (value && isNumeric(value)) {
            return $filter('number')(parseInt(value));            
        } else return value;
    };
    let unformatter = function (value) {
        if (value && isNumeric(value)) {
            return parseInt(value.replace(/[^0-9\.]/g, ''));            
        } else return value;
    };
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel) {
            ngModel.$formatters.push(formatter);
            ngModel.$parsers.push(unformatter);
            element.on('blur', function() {
                element.val(formatter(ngModel.$viewValue))
            });
            element.on('focus', function() {
                element.val(unformatter(ngModel.$viewValue))
            });
        }
    }
};

export default onblurFormatter;