'use strict';

angular.
    module('card').
    component('card', {
        templateUrl: 'app/components/cards/cardTemplate.html',
        controller: function cardController($http) {
            $http.get('app/data/mock.json')
            .then(response => this.cards = response.data.results);
        }
    });
