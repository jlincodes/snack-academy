import * as APIUtil from '../api_util/api_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';
export const INITIALIZE_USER = 'INITIALIZE_USER';
export const ADD_TOKEN_TO_USER = 'ADD_TOKEN_TO_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const initializeUser = (user) => ({
  type: INITIALIZE_USER,
  user
});

export const addTokenToUser = (user) => ({
  type: ADD_TOKEN_TO_USER,
  user
});

export const createNewUser = (user) => dispatch => (
  APIUtil.postUser(user).then(resp => dispatch(receiveUser(resp)))
);

export const verifyUser = (facebookID) => dispatch => (
  APIUtil.verifyUser(facebookID).then(resp => dispatch(receiveUser(resp)))
);
