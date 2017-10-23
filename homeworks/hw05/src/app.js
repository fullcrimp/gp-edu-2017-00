import angular from 'angular';
import guitarList from './components/guitar-list/guital-list.component';
import guitarHeader from './components/guitar-header/guitar-header.component';

angular.module('guitarApp', [])
    .component('guitarList', guitarList)
    .component('guitarHeader', guitarHeader);