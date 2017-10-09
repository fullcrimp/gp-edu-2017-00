import angular from 'angular';
import ngMessages from 'angular-messages';

import intervalValidatorDirective from './directives/intervalValidatorDirective.js';
import maxLengthValidatorDirective from './directives/maxLengthValidatorDirective.js';
import minLengthValidatorDirective from './directives/minLengthValidatorDirective.js';
import patternValidatorDirective from './directives/patternValidatorDirective.js';
import formatInputDirective from './directives/formatInputDirective.js';

import pageComponent from './components/page/pageComponent.js';
import myInputComponent from './components/input/myInputComponent.js';
import formFilterComponent from './components/form-filter/formFilterComponent.js';
import cardComponent from './components/cards/cardComponent.js';

angular.module('app', [
    ngMessages
])
    .component('page', pageComponent)
    .component('formFilter', formFilterComponent)
    .component('myInput', myInputComponent)
    .component('card', cardComponent)

    .directive('interval', intervalValidatorDirective)
    .directive('maxLength', maxLengthValidatorDirective)
    .directive('minLength', minLengthValidatorDirective)
    .directive('customPattern', patternValidatorDirective)
    .directive('formatInput', ['$filter', formatInputDirective]);
