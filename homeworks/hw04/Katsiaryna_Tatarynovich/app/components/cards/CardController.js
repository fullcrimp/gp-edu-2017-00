export class CardController {
    constructor($http) {
        $http.get('app/data/mock.json')
        .then(response => this.cards = response.data.results);
    }
}
