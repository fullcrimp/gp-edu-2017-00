import angular from 'angular';

import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/reducer';

//importing components
import MainComponent from './components/main/main';
import MoneyInputComponent from './components/moneyInput/moneyInput';
import EmailInputComponent from './components/emailInput/emailInput';
import AccountTypeInputComponent from './components/accountTypeInput/accountTypeInput';
import AccountManagementInputComponent from './components/accountManagementInput/accountManagementInput';
import CardListComponent from './components/cardList/cardList';
//importing directives
import MaxLengthValidator from './directives/maxLengthValidator';
import MinLengthValidator from './directives/minLengthValidator';
import RegExpValidator from './directives/regExpValidator';
import RangeValidator from './directives/rangeValidator';
import DropdownValidator from './directives/dropdownValidator';

import MoneyFilter from './directives/moneyFilter';

import InputType from './directives/inputType';

angular.module('angularBestbuy', [
    ngRedux
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider
      .createStoreWith(reducer, [thunk, logger]);
  })
  //components
  .component('main', MainComponent)
  .component('moneyInput', MoneyInputComponent)
  .component('emailInput', EmailInputComponent)
  .component('accountTypeInput', AccountTypeInputComponent)
  .component('accountManagementInput', AccountManagementInputComponent)
  .component('cardList', CardListComponent)
  //directives
  .directive('minLength', MinLengthValidator)
  .directive('maxLength', MaxLengthValidator)
  .directive('regexp', RegExpValidator)
  .directive('range', RangeValidator)
  .directive('dropdownValidator', DropdownValidator)
  .directive('moneyFilter', MoneyFilter)
  .directive('inputType', InputType);
