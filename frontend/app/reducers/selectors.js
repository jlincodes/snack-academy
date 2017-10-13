
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

export const selectDrinks = (productsObj) => {

  let products =  _.valuesIn(productsObj)

  return products.filter((product) => (product.category === "drink"))

}
