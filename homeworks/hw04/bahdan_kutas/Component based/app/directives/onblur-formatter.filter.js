const onblurFormatter = function ($filter) {
    const isNumeric = function (value) {
        return !isNaN(value - parseFloat(value));
    };
    const formatter = function (value) {
        if (value && isNumeric(value)) {
            return $filter('number')(parseInt(value));
        }
        return value;
    };
    const unformatter = function (value) {
        if (value && isNumeric(value)) {
            return parseInt(value.replace(/[^0-9\.]/g, ''));
        }
        return value;
    };
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            element.on('blur', () => {
                element.val(formatter(ngModel.$viewValue));
            });
            element.on('focus', () => {
                element.val(unformatter(ngModel.$viewValue));
            });
        },
    };
};

export default onblurFormatter;
