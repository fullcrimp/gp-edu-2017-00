'use strict';

angular.
    module('card').
    component('card', {
        templateUrl: 'app/cards/cardTemplate.html',
        controller: function cardController($http) {
            $http.get('data/mock.json')
            .then(response => this.cards = response.data.results);
        }
    });
