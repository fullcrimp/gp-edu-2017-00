class formFilterController {
    constructor() {

    }
}

const formFilterComponent = {
    templateUrl: 'app/components/form-filter/formFilterTemplate.html',
    bindings: {
        setPriceFieldStatus: '&',
        setPasswordFieldStatus: '&'
    }
};

export default formFilterComponent;
