
import * as _ from 'lodash';

export const deleteItem = (cart, item ) => {
  let duplicate = cart.slice(0);
  let deleted = false;
  duplicate.forEach((itemInCart, index) => {
    if(!deleted && itemInCart.id === item.id) {
      duplicate.splice(index, 1);
      deleted = true;
    }
  });
  return duplicate;
};

export const formatOrder = (cart, user) => {

  let order = { total: 0, items: [], user_id: user.id, fbId: user.fbId };

  cart.forEach((item) => {
    order.total += (item.price);
    order.items.push(item.id);
  });

  return {order: order}

}

export const selectDrinks = (productsObj) => {

  let products =  _.valuesIn(productsObj)

  return products.filter((product) => (product.category === "drink"))

}

export const selectFood = (productsObj) => {

  let products =  _.valuesIn(productsObj)

  return products.filter((product) => (product.category === "food"))

}
