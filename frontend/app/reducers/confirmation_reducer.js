import { RECEIVE_CONFIRMATION, CLEAR_CONFIRMATION } from '../actions/cart_actions.js';

const defaultState = {};

const ConfirmationReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return action.confirmation.data;
    case CLEAR_CONFIRMATION:
      return {};
    default:
      return state;
  }
};

export default ConfirmationReducer;
