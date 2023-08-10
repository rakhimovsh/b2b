import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subcategories: {
    items: [],
    loading: false,
  },
};

export const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState,
  reducers: {
    setSubcategories: (state, action) => {
      state.subcategories.items = action.payload;
    },
    setSubcategoriesLoading: (state, action) => {
      state.subcategories.loading = action.payload;
    },
  },
});

export default subcategorySlice.reducer;
