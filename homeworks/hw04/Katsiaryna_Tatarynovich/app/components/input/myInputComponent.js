class myInputController {
    constructor() {
    }
}

const myInputComponent = {
    templateUrl: 'app/components/input/myInputTemplate.html',
    controller: myInputController,
    bindings: {
        setPriceFieldStatus: '&'
    }
};

export default myInputComponent;
