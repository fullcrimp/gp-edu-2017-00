class passwordInputController {
    constructor() {
    }
}

const passwordInputComponent = {
    templateUrl: 'app/components/input/passwordInputTemplate.html',
    controller: passwordInputController,
    bindings: {
        setPasswordFieldStatus: '&'
    }
};

export default passwordInputComponent;
