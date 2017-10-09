import angular from 'angular';
import ngMessages from 'angular-messages';

import mainComponent from './components/main-component/main-component.component';
import breadcrumbsComponent from './components/breadcrumbs/breadcrumbs.component';
import cardListComponent from './components/card-list/card-list.component';
import moneyHeaderComponent from './components/money-header/money-header.component';
import paginationComponent from './components/pagination/pagination.component';
import searchFormComponent from './components/search-form/search-form.component'; 
import filterFormComponent from './components/filter-form/filter-form.component';
import textInputComponent from './components/text-input/text-input.component';

import rangeValidator from './directives/range.validator';
import patternValidator from './directives/pattertn.validator';
import minLengthValidator from './directives/min-length.validator';
import maxLengthValidator from './directives/max-length.validator';
import onblurFormatter from './directives/onblur-formatter.filter';

let moneyApp = angular.module('moneyApp', [
    ngMessages
])  
    .component('mainComponent', mainComponent)
    .component('breadcrumbs', breadcrumbsComponent)
    .component('cardList', cardListComponent)
    .component('moneyHeader', moneyHeaderComponent)
    .component('pagination', paginationComponent)
    .component('searchForm', searchFormComponent)
    .component('filterForm', filterFormComponent)
    .component('textInput', textInputComponent)

    .directive('minLengthValidator', minLengthValidator)
    .directive('maxLengthValidator', maxLengthValidator)
    .directive('patternValidator', patternValidator)
    .directive('onblurFormatter', onblurFormatter)
    .directive('rangeValidator', rangeValidator);

export default moneyApp;