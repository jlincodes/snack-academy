import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  user: UserReducer
});

export default RootReducer;
