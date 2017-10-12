import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  RECEIVE_CONFIRMATION,
  RECEIVE_ERRORS } from '../actions/product_actions.js';
import merge from 'lodash/merge';

import { deleteItem } from './selectors.js';

const defaultState = [];

const ProductsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.item];
    case DELETE_ITEM_FROM_CART:
      return deleteItem(state, action.item);
    // case RECEIVE_CONFIRMATION:
      // add later
      // return [...state, action.item];
    // case RECEIVE_ERRORS:
    //   return [...state, action.item];
    default:
      return state;
  }
};

export default ProductsReducer;
