angular.
module('moneyApp').
component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: function CardListController($http) {
        $http.get('data/mock.json').then((response) => {
            this.data = response.data.results;
        });
    }
});