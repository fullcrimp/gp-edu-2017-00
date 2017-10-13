class CardController {
    constructor($http) {
        $http.get('app/data/mock.json')
        .then(response => this.cards = response.data.results);
    }
}

const cardComponent = {
    templateUrl: 'app/components/cards/cardTemplate.html',
    controller: CardController
};

export default cardComponent;
