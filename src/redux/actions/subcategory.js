import { subcategorySlice } from '@/redux/reducers/subcategory.js';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';

export const getAllSubcategories = () => (dispatch) => {
  dispatch(subcategorySlice.actions.setSubcategoriesLoading(false));
  api()
    .get('product/subcategory/')
    .then((res) => {
      if (res?.data) {
        dispatch(subcategorySlice.actions.setSubcategories(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(subcategorySlice.actions.setSubcategoriesLoading(true));
    });
};
