import { productSlice } from '@/redux/reducers/product.js';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { batch } from 'react-redux';

export const getNewProducts = () => (dispatch) => {
  dispatch(productSlice.actions.setNewProductsLoading(true));
  api()
    .get('/product/products/')
    .then((res) => {
      if (Array.isArray(res?.data)) {
        dispatch(productSlice.actions.setNewProducts(res.data?.slice(0, 10)));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(productSlice.actions.setNewProductsLoading(false));
    });
};

export const getPopularProducts = () => (dispatch) => {
  dispatch(productSlice.actions.setPopularProductsLoading(true));
  api()
    .get('/product/products/')
    .then((res) => {
      if (Array.isArray(res?.data)) {
        const sortedProducts = res.data
          .sort((a, b) => b.average_rating - a.average_rating)
          .slice(0, 10);
        dispatch(productSlice.actions.setPopularProducts(sortedProducts));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(productSlice.actions.setPopularProductsLoading(false));
    });
};

export const getProductById = (productId) => (dispatch) => {
  api()
    .get(`/product/products/${productId}/`)
    .then((res) => {
      if (res?.data) {
        dispatch(productSlice.actions.setSingleProduct(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(productSlice.actions.setSingleProductLoading(false));
    });
};

export const createProductComment = (request) => (dispatch) => {
  dispatch(productSlice.actions.setProductCommentLoading(true));
  api()
    .post('/product/product-ratings/', request)
    .then((res) => {
      if (res?.data) {
        dispatch(productSlice.actions.setProductCommentResponse(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      batch(() => {
        dispatch(productSlice.actions.setProductCommentLoading(false));
        dispatch(productSlice.actions.setProductCommentResponse(null));
      });
    });
};

export const getProducts = (search = '', subcategoryIds = [], country) => (dispatch) => {
    dispatch(productSlice.actions.setProductsLoading(true));
    api()
      .get(`/product/products/?search=${search}`)
      .then((res) => {
        if (res?.data) {
         
          if(search || country || subcategoryIds.length > 0) {
            const result = res.data.filter((product) => {
              const placeCondition = country ? product?.mode_in.toLowerCase() === country.toLowerCase() : true;
              const filteredBySubCategories = subcategoryIds.length ? filterProductsBySubcategories(res?.data, subcategoryIds) : true;
              // console.log(subcategoryIds);
              // console.log('' , filteredBySubCategories);
              console.log('placeCondition' , placeCondition);
              return placeCondition && filteredBySubCategories
            })
            console.log('result' , result)

            dispatch(productSlice.actions.setProducts(result));
          } else {
            dispatch(productSlice.actions.setProducts(res.data))
          }
          
        }
      })
      .catch((err) => {
        handleHttpError(err);
      })
      .finally(() => {
        dispatch(productSlice.actions.setProductsLoading(false));
      });
  };

const filterProductsBySubcategories = (products, subcategories) => {
  return products.filter((product) => subcategories.includes(product.category?.id));
};
