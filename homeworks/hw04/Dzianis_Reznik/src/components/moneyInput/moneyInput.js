class MoneyInputController {
  constructor($scope) {
    $scope.money = 50;
    this.send = function(inputValid) {
      if (inputValid) this.sendMoney({
        money: $scope.money
      })
    }
  }
}

const MoneyInputComponent = {
  template: require('./moneyInput.html'),
  controller: MoneyInputController,
  bindings: {
    sendMoney: "&"
  }
}


export default MoneyInputComponent;
