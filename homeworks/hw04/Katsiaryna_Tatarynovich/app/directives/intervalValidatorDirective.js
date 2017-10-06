'use strict';

const intervalValidatorDirective = () => {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attr, ngModel) => {
            const interval = attr.interval;
            const arrInterval = interval.slice(1, interval.length - 1).split(',');
            
            ngModel.$validators.intervalCheck = (modelValue, viewValue) => {
                return ngModel.$isEmpty(viewValue) || ((Number(viewValue) < Number(arrInterval[1])) && (Number(viewValue) > Number(arrInterval[0])));
            };
        }
    };
};

angular
    .module('app')
    .directive('interval', intervalValidatorDirective);
