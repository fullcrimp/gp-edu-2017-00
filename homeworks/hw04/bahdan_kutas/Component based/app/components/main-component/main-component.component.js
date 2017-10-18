import componentTemplate from './main-component.template.html';

class MainComponentController {
    constructor() {
    }
}

const mainComponent = {
    bindings: {
        setValue: '&',
        setFormValidity: '&',
    },
    controller: MainComponentController,
    template: componentTemplate,
};

export default mainComponent;
