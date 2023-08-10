import { applicationSlice } from '@/redux/reducers/application.js';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { batch } from 'react-redux';

export const createProductRequest = (request) => (dispatch) => {
  dispatch(applicationSlice.actions.setCreateProductLoading(true));
  api()
    .post('/product/questions/', request)
    .then((res) => {
      if (res?.data) {
        dispatch(applicationSlice.actions.setCreateProductResponse(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      batch(() => {
        dispatch(applicationSlice.actions.setCreateProductLoading(false));
        dispatch(applicationSlice.actions.setCreateProductResponse(null));
      });
    });
};


export const createApplicationForPlacement = (request) => (dispatch) => {
  dispatch(applicationSlice.actions.setApplicationForPlacementLoading(true));
  api()
    .post('/product/applications/', request)
    .then((res) => {
      if (res?.data) {
        dispatch(applicationSlice.actions.setApplicationForPlacementResponse(res.data));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      batch(() => {
        dispatch(applicationSlice.actions.setApplicationForPlacementLoading(false));
        dispatch(applicationSlice.actions.setApplicationForPlacementResponse(null));
      });
    });
}