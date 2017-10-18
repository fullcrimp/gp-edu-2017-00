class PageController {
    constructor() {

    }
}

const pageComponent = {
    templateUrl: 'app/components/page/pageTemplate.html',
    controller: PageController,
    bindings: {
        setFormFilterStatus: '&',
        setPriceFieldStatus: '&',
        setPasswordFieldStatus: '&'
    }
};

export default pageComponent;
