import { RECEIVE_USER, INITIALIZE_USER, ADD_TOKEN_TO_USER, RECEIVE_CURRENT_USER } from '../actions/user_actions.js';
// import merge from 'lodash/merge';

const defaultState = {};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user.data;
    case INITIALIZE_USER:
      return Object.assign({}, state, action.user);
    case ADD_TOKEN_TO_USER:
      let user = Object.assign({}, state);
      user.stripe_token = action.user
      return user
    default:
      return state;
  }
};

export default UserReducer;
