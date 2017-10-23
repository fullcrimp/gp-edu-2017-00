import componentTemplate from './text-input.template.html';

class TextInputController {
    constructor() {
    }
}

const textInputComponent = {
    bindings: {
        setValue: '&',
    },
    controller: TextInputController,
    template: componentTemplate,
};

export default textInputComponent;
