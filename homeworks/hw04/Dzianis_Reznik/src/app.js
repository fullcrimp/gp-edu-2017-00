import angular from 'angular';
//importing components
import MainComponent from './components/main/main.js';
import CardListComponent from './components/cardList/cardList.js';
//importing directives
import MaxLengthValidator from './directives/maxLengthValidator.js';
import MinLengthValidator from './directives/minLengthValidator.js';
import RegExpValidator from './directives/regExpValidator.js';
import RangeValidator from './directives/rangeValidator';

import MoneyFilter from './directives/moneyFilter.js';

angular.module('angularBestbuy', [])
  .component('main', MainComponent)
  .component('cardList', CardListComponent)
  .directive('minLength', MinLengthValidator)
  .directive('maxLength', MaxLengthValidator)
  .directive('regexp', RegExpValidator)
  .directive('range', RangeValidator)
  .directive('moneyFilter', MoneyFilter);
