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
    loading: true,
  },
  selectedCompanyProducts: [],
  productComment: {
    response: null,
    loading: false
  }
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
    setPopularProducts: (state, action) => {
      state.newProducts.items = action.payload;
    },
    setPopularProductsLoading: (state, action) => {
      state.newProducts.loading = action.payload;
    },
    setSingleProduct: (state, action) => {
      state.singleProduct.item = action.payload
    },
    setSingleProductLoading: (state, action) =>{
      state.singleProduct.loading = action.payload
    },
    setSelectedCompanyProducts: (state, action) =>{
      state.selectedCompanyProducts = action.payload
    },
    setProductCommentResponse: (state, action) =>{
      state.productComment.response = action.payload
    },
    setProductCommentLoading: (state, action) =>{
      state.productComment.loading = action.payload
    }
  },
});

export default productSlice.reducer;
