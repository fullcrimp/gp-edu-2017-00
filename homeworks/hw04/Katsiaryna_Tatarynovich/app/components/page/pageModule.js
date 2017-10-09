import component from './pageComponent.js';

const page = angular.module('page', [])
    .component('page', component).name;

export default page;
