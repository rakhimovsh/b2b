import { categorySlice } from '@/redux/reducers/category.js';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';

export const getAllCategories = () => (dispatch) => {
  dispatch(categorySlice.actions.setCategoriesLoading(true));
  api()
    .get('/product/category/')
    .then((res) => {
      if (res.data) {
        dispatch(categorySlice.actions.setCategories(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(categorySlice.actions.setCategoriesLoading(false));
    });
};
