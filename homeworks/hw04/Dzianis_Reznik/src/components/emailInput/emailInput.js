class EmailInputController {
  constructor($scope) {
    $scope.email = '';
    this.send = function(inputValid) {
      if (inputValid) this.sendEmail({
        email: $scope.email
      })
    }
  }
}

const EmailInputComponent = {
  template: require('./emailInput.html'),
  controller: EmailInputController,
  bindings: {
    sendEmail: "&"
  }
}


export default EmailInputComponent;
