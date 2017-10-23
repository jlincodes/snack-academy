import { RECEIVE_CONFIRMATION } from '../actions/cart_actions.js';

const defaultState = {};

const ConfirmationReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONFIRMATION:
      return action.confirmation.data
    default:
      return state;
  }
};

export default ConfirmationReducer;
