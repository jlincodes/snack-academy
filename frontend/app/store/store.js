import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducers.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let menuLoaded = {products: {"1":{"id":1,"name":"Cafe Americano","price":200,"description":"great pick me up!","category":"drink","inventory":4,"img_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/160px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg","ordered_items":[],"orders":[],"buyers":[]},"2":{"id":2,"name":"Red Bull","price":300,"description":"get energized!","category":"drink","inventory":7,"img_url":"http://via.placeholder.com/75x75","ordered_items":[],"orders":[],"buyers":[]},"3":{"id":3,"name":"Doritos Nacho","price":100,"description":"hungry?","category":"food","inventory":1,"img_url":"http://via.placeholder.com/75x75","ordered_items":[],"orders":[],"buyers":[]},"4":{"id":4,"name":"Cup Ramen","price":150,"description":"it's more than just soup!","category":"food","inventory":7,"img_url":"http://via.placeholder.com/75x75","ordered_items":[],"orders":[],"buyers":[]},"5":{"id":5,"name":"Mints","price":400,"description":"Good for pair programming","category":"food","inventory":6,"img_url":"http://via.placeholder.com/75x75","ordered_items":[],"orders":[],"buyers":[]}}
}
const configureStore = (preloadedState = menuLoaded) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
