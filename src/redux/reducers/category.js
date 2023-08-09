import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    items: [],
    loading: false,
  },
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories.items = action.payload
    },
    setCategoriesLoading: (state, action) => {
      state.categories.loading = action.payload
    }
  },
});

export default categorySlice.reducer;
