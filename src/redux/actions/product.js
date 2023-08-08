import { productSlice } from '@/redux/reducers/product.js';
import {api} from "@/utils/api.js";

export const getProducts = () => (dispatch) => {
  dispatch(productSlice.actions.setLoading(true));
  api().get('/')
};
