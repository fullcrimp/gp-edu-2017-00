import component from './cardComponent.js';

let card = angular.module('card', [])
    .component('cardComponent', component).name;

export default card;
