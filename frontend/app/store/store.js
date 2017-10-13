import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducers.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
