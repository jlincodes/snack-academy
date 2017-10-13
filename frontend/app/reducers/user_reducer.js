import { RECEIVE_NEW_USER, INITIALIZE_USER, ADD_TOKEN_TO_USER } from '../actions/user_actions.js';
// import merge from 'lodash/merge';

const defaultState = {};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_USER:
      return action.user;
    case INITIALIZE_USER:
      return Object.assign({}, state, action.user);
    case ADD_TOKEN_TO_USER:
      let user = Object.assign({}, state);
      user.token = action.user
      return user
    default:
      return state;
  }
};

export default UserReducer;
