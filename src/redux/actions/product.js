import { productSlice } from '@/redux/reducers/product.js';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';

export const getNewProducts = () => (dispatch) => {
  dispatch(productSlice.actions.setNewProductsLoading(true));
  api()
    .get('/product/products')
    .then((res) => {
      if (Array.isArray(res?.data)) {
        dispatch(productSlice.actions.setNewProducts(res.data?.slice(0, 10)));
      } else {
        dispatch(productSlice.actions.setNewProducts([]));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(productSlice.actions.setNewProductsLoading(false));
    });
};
