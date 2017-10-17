class moneyInputController {
    constructor() {
    }
}

const moneyInputComponent = {
    templateUrl: 'app/components/input/moneyInputTemplate.html',
    controller: moneyInputController,
    bindings: {
        setPriceFieldStatus: '&'
    }
};

export default moneyInputComponent;
