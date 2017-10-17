function sendEmailInput(email) {
  return {
    type: "EMAIL",
    payload: {
      email: email
    }
  };
}

function sendMoneyInput(money) {
  return {
    type: "MONEY",
    payload: {
      money: money
    }

  }
}

function sendAccountTypeInput(type) {
  return {
    type: "TYPE",
    payload: {
      type: type
    }
  }
}

function sendMsmOnlyInput(msmOnly) {
  return {
    type: "MSM_ONLY",
    payload: {
      msmOnly: msmOnly
    }
  }
}

function sendAccountManagementInput(management) {
  return {
    type: "MANAGEMENT",
    payload: {
      management: management
    }
  }
}
export default {
  sendEmailInput, sendMoneyInput, sendAccountTypeInput, sendMsmOnlyInput, sendAccountManagementInput
};
