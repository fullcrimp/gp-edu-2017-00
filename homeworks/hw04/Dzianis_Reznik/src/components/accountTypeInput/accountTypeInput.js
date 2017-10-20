class AccountTypeInputController {
  constructor($scope) {}
}

const AccountTypeInputComponent = {
  template: require('./accountTypeInput.html'),
  controller: AccountTypeInputController,
  bindings: {
    sendAccountType: "&"
  }
}


export default AccountTypeInputComponent;
