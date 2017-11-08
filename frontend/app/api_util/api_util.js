import * as axios from 'axios';

export const getProducts = () => (
  axios.get('https://snackacademy.herokuapp.com/api/products')
);

export const postOrder = (order) => (
  axios.post('https://snackacademy.herokuapp.com/api/orders', order)
);

export const postUser = (user) => (
  axios.post('https://snackacademy.herokuapp.com/api/users', user)
);

export const requestUser = (user) => (
  axios.get('https://snackacademy.herokuapp.com/api/users/verify', user)
)

// export const getProducts = () => (
//   axios.get('http://localhost:3000/api/products')
//
// );
//
// export const postOrder = (order) => (
//   axios.post('http://localhost:3000/api/orders', order)
// );
//
// export const postUser = (user) => (
//   axios.post('http://localhost:3000/api/users', user)
// );
//
// export const verifyUser = (user) => (
//   axios.get('http://localhost:3000/api/users/verify', user)
// )
