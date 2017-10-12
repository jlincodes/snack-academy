import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  user: UserReducer
});

export default RootReducer;
