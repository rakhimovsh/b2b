import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {
    items: [],
    loading: false,
  },
  popularProducts: {
    items: [],
    loading: false,
  },
  newProducts: {
    items: [],
    loading: false,
  },
  singleProduct: {
    item: null,
    loading: false,
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setNewProducts: (state, action) => {
      state.newProducts.items = action.payload;
    },
    setNewProductsLoading: (state, action) => {
      state.newProducts.loading = action.payload;
    },
  },
});

export default productSlice.reducer;
