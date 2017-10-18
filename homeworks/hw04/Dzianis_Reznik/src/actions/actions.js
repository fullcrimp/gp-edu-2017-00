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

function sendPhoneOption(phone) {
  return {
    type: "PHONE",
    payload: {
      phone: phone
    }
  }
}

function sendTextOption(text) {
  return {
    type: "TEXT",
    payload: {
      text: text
    }
  }
}

function sendTransfer(transfer) {
  return {
    type: "TRANSFER",
    payload: {
      transfer: transfer
    }
  }
}
export default {
  sendEmailInput, sendMoneyInput,
  sendAccountTypeInput, sendMsmOnlyInput,
  sendAccountManagementInput, sendPhoneOption,
  sendTextOption, sendTransfer
};
