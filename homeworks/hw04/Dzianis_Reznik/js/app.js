(function () {
    let app = angular.module('creditCards', []);

    let mock;
    $.getJSON('json/mock.json', function (response) {
        mock = response;
    });

    app.controller('CardsController', function () {
        this.results = mock.results;
    });


})();

