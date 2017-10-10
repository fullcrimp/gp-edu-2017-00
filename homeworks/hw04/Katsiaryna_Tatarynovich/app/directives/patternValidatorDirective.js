'use strict';

export class PatternValidatorDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attr, ngModel) {
        const pattern = attr.customPattern;
        const regExp = new RegExp(pattern);

        ngModel.$validators.patternCheck = (modelValue, viewValue) => {
            return ngModel.$isEmpty(modelValue) || regExp.test(modelValue);
        };
    }
}
