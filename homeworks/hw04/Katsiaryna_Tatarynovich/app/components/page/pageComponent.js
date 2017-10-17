class PageController {
    constructor() {

    }
}

const pageComponent = {
    templateUrl: 'app/components/page/pageTemplate.html',
    controller: PageController,
    bindings: {
        setPriceFieldStatus: '&'
    }
};

export default pageComponent;
