import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  popularProducts: [],
  newProducts: [],
  singleProduct: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export default productSlice.reducer;
