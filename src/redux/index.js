import {combineReducers, configureStore} from "@reduxjs/toolkit";
import home from "./reducers/home.js";

const rootReducer = combineReducers({ home});


export default configureStore({ reducer: rootReducer });