import { combineReducers, configureStore } from '@reduxjs/toolkit';
import product from './reducers/product.js';
import category from './reducers/category.js';
import company from './reducers/company.js';
import subcategory from './reducers/subcategory.js';
import application from './reducers/application.js';
import newsInfo from './reducers/news.js'

const rootReducer = combineReducers({
  product,
  category,
  company,
  subcategory,
  application,
  newsInfo
});

export default configureStore({ reducer: rootReducer });
