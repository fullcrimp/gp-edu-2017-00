import component from './formFilterComponent.js';

const formFilter = angular.module('formFilter', [])
    .component('formFilter', component).name;

export default formFilter;
