import angular from 'angular';
import ngMessages from 'angular-messages';
import ngUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import ReduxService from './services/ReduxService.js';

import { ReduxDirective } from './directives/ReduxDirective.js';
import { IntervalValidatorDirective } from './directives/IntervalValidatorDirective.js';
import { MaxLengthValidatorDirective } from './directives/MaxLengthValidatorDirective.js';
import { MinLengthValidatorDirective } from './directives/MinLengthValidatorDirective.js';
import { PatternValidatorDirective } from './directives/PatternValidatorDirective.js';
import { OnlyNumberDirective } from './directives/OnlyNumberDirective.js';
import { FormatInputDirective } from './directives/FormatInputDirective.js';

import pageComponent from './components/page/pageComponent.js';
import myInputComponent from './components/input/myInputComponent.js';
import formFilterComponent from './components/form-filter/formFilterComponent.js';
import cardComponent from './components/cards/cardComponent.js';

import { rootReducer } from './reducers';

angular
    .module('app', [
        ngMessages,
        ngRedux,
        ngUiRouter
    ])
    .config(($ngReduxProvider) => {
        $ngReduxProvider
            .createStoreWith(rootReducer, [logger, thunk]);

    })
    // .service('reduxService', ReduxService)

    .component('page', pageComponent)
    .component('formFilter', formFilterComponent)
    .component('myInput', myInputComponent)
    .component('card', cardComponent)

    .directive('reduxDirective', ReduxDirective)
    .directive('interval', IntervalValidatorDirective)
    .directive('maxLength', MaxLengthValidatorDirective)
    .directive('minLength', MinLengthValidatorDirective)
    .directive('customPattern', PatternValidatorDirective)
    .directive('onlyNumber', OnlyNumberDirective)
    .directive('formatInput', ['$filter', FormatInputDirective]);
