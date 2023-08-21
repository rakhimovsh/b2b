import { companySlice } from "../reducers/company"
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { productSlice } from "../reducers/product"; 

export const getAllCompanies = (search, companyId) => (dispatch) => {
    
    dispatch(companySlice.actions.setCompaniesLoading(true))
    api()
     .get('/product/company/')
     .then(res => {
        if(res?.data) {
            if(search || companyId) {
               const result = res.data.filter(company => {
                const idCondition = companyId ? company?.type_product?.id === companyId : true
                const searchCondition = search ? company?.name.toLowerCase().includes(search.toLowerCase()) : true
                return idCondition &&  searchCondition
               } )
                dispatch(companySlice.actions.setCompanies(result))
            } else {
                dispatch(companySlice.actions.setCompanies(res.data))
            }
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