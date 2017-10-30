import { RECEIVE_ALL_PRODUCTS } from '../actions/product_actions.js';
import merge from 'lodash/merge';

const defaultState = {};

const ProductsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default ProductsReducer;
