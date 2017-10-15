import * as axios from 'axios';

export const getProducts = () => (
  axios.get('https://snackacademy.herokuapp.com/api/products')
);

export const postOrder = (order) => (
  axios.post('https://snackacademy.herokuapp.com/api/charges', order)
);

export const postUser = (user) => (
  axios.post('https://snackacademy.herokuapp.com/api/users', user)
);
