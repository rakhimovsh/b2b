import { combineReducers, configureStore } from '@reduxjs/toolkit';
import product from './reducers/product.js';

const rootReducer = combineReducers({ product });

export default configureStore({ reducer: rootReducer });
