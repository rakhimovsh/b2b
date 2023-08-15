import { companySlice } from "../reducers/company"
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { productSlice } from "../reducers/product"; 

export const getAllCompanies = () => (dispatch) => {
    dispatch(companySlice.actions.setCompaniesLoading(true))
    api()
     .get('/product/company/')
     .then(res => {
        if(res?.data) {
            dispatch(companySlice.actions.setCompanies(res.data))
        }
    }).catch(err=> {
        handleHttpError(err);
    }).finally(() => {
        dispatch(companySlice.actions.setCompaniesLoading(false))
    })
}
export const getCompanyById = (companyId) => (dispatch) => {
    api()
    .get(`/product/company/${companyId}`)
    .then(res => {
        if(res?.data) {
            dispatch(companySlice.actions.setSingleCompany(res.data))
            dispatch(productSlice.actions.setSelectedCompanyProducts(res.data?.products))
        }
    }).catch(err => {
        handleHttpError(err);
    }).finally(() => {
        dispatch(companySlice.actions.setSingleCompanyLoading(false))
    })
}