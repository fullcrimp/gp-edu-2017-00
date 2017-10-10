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

import RangeValidator from './directives/range.validator';
import PatternValidator from './directives/pattertn.validator';
import MinLengthValidator from './directives/min-length.validator';
import MaxLengthValidator from './directives/max-length.validator';
import OnblurFormatter from './directives/onblur-formatter.filter';

export default angular.module('moneyApp', [
    ngMessages,
])

    .directive('minLengthValidator', MinLengthValidator)
    .directive('maxLengthValidator', MaxLengthValidator)
    .directive('patternValidator', PatternValidator)
    .directive('rangeValidator', RangeValidator)
    .directive('onblurFormatter', ['$filter', OnblurFormatter])

    .component('mainComponent', mainComponent)
    .component('breadcrumbs', breadcrumbsComponent)
    .component('cardList', cardListComponent)
    .component('moneyHeader', moneyHeaderComponent)
    .component('pagination', paginationComponent)
    .component('searchForm', searchFormComponent)
    .component('filterForm', filterFormComponent)
    .component('textInput', textInputComponent);
