class AccountManagementInputController {
  constructor($scope) {}
}

const AccountManagementInputComponent = {
  template: require('./accountManagementInput.html'),
  controller: AccountManagementInputController,
  bindings: {
    sendAccountManagement: "&"
  }
}


export default AccountManagementInputComponent;
