const ADD_ACCOUNT = "ADD_ACCOUNT";
const REMOVE_ACCOUNT = "REMOVE_ACCOUNT";
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

export const addAccount = accountName => ({
  type: ADD_ACCOUNT,
  payload: { accountName }
});

export const removeAccount = accountName => ({
  type: REMOVE_ACCOUNT,
  payload: { accountName }
});

export const deposit = (accountName, amount) => ({
  type: DEPOSIT,
  payload: { accountName, amount }
});

export const withdraw = (accountName, amount) => ({
  type: WITHDRAW,
  payload: { accountName, amount }
});

export const changeBalance = (accountName, newBalance) => ({
  type: "CHANGE_BALANCE",
  payload: { accountName, newBalance },
});

const initialState = {
  accounts: {}
};

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.payload.accountName]: {
            balance: 0
          }
        }
      };
      case "CHANGE_BALANCE":
      const { accountName, newBalance } = action.payload;
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [accountName]: {
            ...state.accounts[accountName],
            balance: newBalance,
          },
        },
      };
    case REMOVE_ACCOUNT:
      const { [action.payload.accountName]: _, ...newAccounts } = state.accounts;
      return {
        ...state,
        accounts: newAccounts
      };
    case DEPOSIT:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.payload.accountName]: {
            balance: state.accounts[action.payload.accountName].balance + action.payload.amount
          }
        }
      };
    case WITHDRAW:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.payload.accountName]: {
            balance: state.accounts[action.payload.accountName].balance - action.payload.amount
          }
        }
      };
    default:
      return state;
  }
};

export default accountsReducer;
