import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer.js';
import UserReducer from './user_reducer';
import ConfirmationReducer from './confirmation_reducer';
import ErrorsReducer from './errors_reducer';


const RootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  user: UserReducer,
  confirmation: ConfirmationReducer,
  errors: ErrorsReducer
});

export default RootReducer;
