import componentTemplate from './filter-form.tempate.html';

class FilterFormController {
    constructor() {
    }
}
const filterFormComponent = {
    bindings: {
        setValue: '&',
        setFormValidity: '&',
    },
    controller: FilterFormController,
    template: componentTemplate,
};

export default filterFormComponent;
