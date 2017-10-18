const INITIAL_STATE = {
  money: "50",
  email: undefined,
  type: undefined,
  msmOnly: false,
  management: undefined,
  phone: false,
  text: false,
  transfer: true
};

export default function reducer(state = INITIAL_STATE, action) {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case "MONEY":
      return Object.assign({}, state, {
        money: action.payload.money
      });
    case "EMAIL":
      return Object.assign({}, state, {
        email: action.payload.email
      });
    case "TYPE":
      return Object.assign({}, state, {
        type: action.payload.type
      });
    case "MSM_ONLY":
      return Object.assign({}, state, {
        msmOnly: action.payload.msmOnly
      });

    case "MANAGEMENT":
      return Object.assign({}, state, {
        management: action.payload.management
      });
    case "TEXT":
      return Object.assign({}, state, {
        text: action.payload.text
      });
    case "PHONE":
      return Object.assign({}, state, {
        phone: action.payload.phone
      });
    case "TRANSFER":
      return Object.assign({}, state, {
        transfer: action.payload.transfer
      });
    default:
      return state;
  }
}
