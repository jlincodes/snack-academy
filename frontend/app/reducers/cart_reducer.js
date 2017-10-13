import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART } from '../actions/cart_actions.js';
import merge from 'lodash/merge';

import { deleteItem } from './selectors.js';

const defaultState = [];

const CartReducer = (state = defaultState, action) => {
  console.log('state in cart reducer', state);
  console.log('action in cart reducer', action);
  console.log('HERE@@!!@');
  Object.freeze(state);
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.item];
    case DELETE_ITEM_FROM_CART:
      return deleteItem(state, action.item);
    default:
      return state;
  }
};

export default CartReducer;
