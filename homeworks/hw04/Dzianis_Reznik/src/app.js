import angular from 'angular';
//importing components
import MainComponent from './components/main/main';
import MoneyInputComponent from './components/moneyInput/moneyInput';
import CardListComponent from './components/cardList/cardList';
//importing directives
import MaxLengthValidator from './directives/maxLengthValidator';
import MinLengthValidator from './directives/minLengthValidator';
import RegExpValidator from './directives/regExpValidator';
import RangeValidator from './directives/rangeValidator';

import MoneyFilter from './directives/moneyFilter';

import InputType from './directives/inputType';

angular.module('angularBestbuy', [])
  .component('main', MainComponent)
  .component('moneyInput', MoneyInputComponent)
  .component('cardList', CardListComponent)
  .directive('minLength', MinLengthValidator)
  .directive('maxLength', MaxLengthValidator)
  .directive('regexp', RegExpValidator)
  .directive('range', RangeValidator)
  .directive('moneyFilter', MoneyFilter)
  .directive('inputType', InputType);
