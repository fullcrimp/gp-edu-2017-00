import './cardList.scss';
import './img/card-logo.jpg';
import mock from '../../lib/mock.json';

class CardListController {
  constructor() {
    this.cards = mock.results;
  }
}

const CardListComponent = {
  template: require('./cardList.html'),
  controller: CardListController
}

export default CardListComponent;
