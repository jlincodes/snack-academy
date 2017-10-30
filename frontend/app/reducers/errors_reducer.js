import { RECEIVE_ORDER_ERRORS } from '../actions/errors_actions.js';


const ErrorsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER_ERRORS:
      return action.confirmation
    default:
      return state;
  }
};

export default ErrorsReducer;
