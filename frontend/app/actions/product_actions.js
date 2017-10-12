import * as APIUtil from '../api_util/api_util.js';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

export const requestAllProducts = () => dispatch => (
  APIUtil.getProducts().then(resp => dispatch(receiveAllProducts(resp)))
);
