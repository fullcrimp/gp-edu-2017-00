import componentTemplate from './guitar-list.template.html';
import guitarListStyles from './guitar-list.style.scss';
import guitarData from './data.json';

class GuitarListController {
    constructor($http) {
        this.items = guitarData.guitars;
    }
}

const GuitarListComponent = {
    template: componentTemplate,
    controller: GuitarListController,
};

export default GuitarListComponent;
