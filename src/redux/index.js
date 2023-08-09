import { combineReducers, configureStore } from '@reduxjs/toolkit';
import product from './reducers/product.js';
import category from './reducers/category.js';

const rootReducer = combineReducers({ product, category });

export default configureStore({ reducer: rootReducer });
