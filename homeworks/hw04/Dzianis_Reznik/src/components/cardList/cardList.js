import './cardList.scss';

class CardListController {
  constructor($http) {
    $http.get('lib/mock.json').then((response) => {
      this.cards = response.data.results;
    })
  }
}

const CardListComponent = {
  template: require('./cardList.html'),
  controller: CardListController
}

export default CardListComponent;
