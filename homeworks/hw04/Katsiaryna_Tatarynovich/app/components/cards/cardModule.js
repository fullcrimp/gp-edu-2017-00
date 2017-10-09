import component from './cardComponent.js';

const card = angular.module('card', [])
    .component('card', component).name;

export default card;
