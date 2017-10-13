'use strict';

export class IntervalValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const interval = attr.interval;
        const arrInterval = interval.slice(1, interval.length - 1).split(',');

        ngModel.$validators.intervalCheck = (modelValue, viewValue) => {
            return ngModel.$isEmpty(modelValue) ||
                ((Number(modelValue) < Number(arrInterval[1])) &&
                (Number(modelValue) > Number(arrInterval[0])));
        };
    }
}
