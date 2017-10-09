class CardListController {
    constructor($http) {
        $http.get('data/mock.json').then((response) => {
            this.data = response.data.results;
        });
    }
}


const cardListComponent = {
    templateUrl: 'components/card-list/card-list.template.html',
    controller: CardListController,
};

export default cardListComponent;
