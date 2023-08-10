import { createSlice } from '@reduxjs/toolkit';
import {createApplicationForPlacement} from "@/redux/actions/application.js";

const initialState = {
  createProduct: {
    response: null,
    loading: false,
  },
  applicationForPlacement: {
    response: null,
    loading: false,
  }
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setCreateProductResponse: (state, action) =>{
      state.createProduct.response = action.payload
    },
    setCreateProductLoading: (state, action) =>{
      state.createProduct.loading = action.payload
    },
    setApplicationForPlacementResponse: (state, action) =>{
      state.applicationForPlacement.response = action.payload
    },
    setApplicationForPlacementLoading: (state, action) =>{
      state.applicationForPlacement.loading = action.payload
    },
  },
});

export default applicationSlice.reducer;
