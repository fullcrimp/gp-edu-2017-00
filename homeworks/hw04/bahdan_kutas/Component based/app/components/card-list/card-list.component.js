import componentTemplate from './card-list.template.html';
import mockData from '../../data/mock.json';

class CardListController {
    constructor($http) {
        this.data = mockData.results;
    }
}


const cardListComponent = {
    template: componentTemplate,
    controller: CardListController,
};

export default cardListComponent;

// $http.get('../app/data/mock.json').then((response) => {
//     this.data = response.data.results;
// });