import { companySlice } from '../reducers/company';
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { productSlice } from '../reducers/product';

export const getAllCompanies = (search = '' , companyId = null, placeCode, subCategoryIds = []) => (dispatch) => {
  dispatch(companySlice.actions.setCompaniesLoading(true));



  api()
    .get('/product/company/')
    .then((res) => {
      if (res?.data) {
        if (search || companyId || placeCode || subCategoryIds) {
          const result = res.data.filter((company) => {
            const idCondition = companyId ? company?.type_product?.id === companyId : true;
            const filteredBySubCategories = subCategoryIds.length > 0 ? company.products.some((product) => subCategoryIds.includes(product.category.id)) : true;
            const searchCondition = search ? company?.name.toLowerCase().includes(search.toLowerCase()) : true;
            const placeCondition = placeCode ? company?.country.toLowerCase() === placeCode.toLowerCase() : true;
            return idCondition && searchCondition && placeCondition && filteredBySubCategories;
          });
          dispatch(companySlice.actions.setCompanies(result));
        } else {
          dispatch(companySlice.actions.setCompanies(res.data));
        }
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(companySlice.actions.setCompaniesLoading(false));
    });
};
export const getCompanyById = (companyId) => (dispatch) => {
  api()
    .get(`/product/company/${companyId}/`)
    .then((res) => {
      if (res?.data) {
        dispatch(companySlice.actions.setSingleCompany(res.data));
        dispatch(productSlice.actions.setSelectedCompanyProducts(res.data?.products));
      }
    })
    .catch((err) => {
      handleHttpError(err);
    })
    .finally(() => {
      dispatch(companySlice.actions.setSingleCompanyLoading(false));
    });
};

export const getCompaniesById = (companyId) => (dispatch) => {
  api()
    .get(`/product/company/${companyId}/`)
    .then(res => {
      if(res?.data){
        dispatch(companySlice.actions.setSortedCompanies([companyId, res.data]))
      }
    })
}