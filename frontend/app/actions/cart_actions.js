import * as APIUtil from '../api_util/api_util.js';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
export const RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  item
});

export const deleteItemFromCart = (item) => ({
  type: DELETE_ITEM_FROM_CART,
  item
});

export const receiveConfirmation = (confirmation) => ({
  type: RECEIVE_CONFIRMATION,
  confirmation
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const createOrder = (order) => dispatch => (
  APIUtil.postOrder(order)
    .then( (resp) => receiveConfirmation(resp)),
    errors => dispatch(receiveErrors(errors.responseJSON))
);