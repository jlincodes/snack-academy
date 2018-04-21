import * as axios from 'axios';

export const getProducts = () => (
  axios.get('https://snack-academy-secure.herokuapp.com/api/products')
);

export const postOrder = (order) => (
  axios.post('https://snack-academy-secure.herokuapp.com/api/orders', order)
);

export const postUser = (user) => (
  axios.post('https://snack-academy-secure.herokuapp.com/api/users', user)
);


export const verifyUser = (user) => (
  axios.get(`https://snack-academy-secure.herokuapp.com/api/users?user[fbId]=${user.fbId}`)
);
