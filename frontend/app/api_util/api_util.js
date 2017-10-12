import * as axios from 'axios';

export const getProducts = () => (
  axios.get('https://snackappacademhy.herokuapp.com/api/products')
);

export const postOrder = (order) => (
  axios.post('https://snackappacademhy.herokuapp.com/api/charges', order)
);

export const postUser = (user) => (
  axios.post('https://snackappacademhy.herokuapp.com/api/users', user)
);
