import { combineReducers, configureStore } from '@reduxjs/toolkit';
import product from './reducers/product.js';
import category from './reducers/category.js';
import company from './reducers/company.js';

const rootReducer = combineReducers({ product, category, company });

export default configureStore({ reducer: rootReducer });
