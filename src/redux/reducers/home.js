import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default homeSlice.reducer;
