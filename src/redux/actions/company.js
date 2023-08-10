import { companySlice } from "../reducers/company"
import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';

export const getAllCompanies = () => (dispatch) => {
    dispatch(companySlice.actions.setCompaniesLoading(true))
    api().get('/product/company/').then(res => {
        if(res?.data) {
            dispatch(companySlice.actions.setCompanies(res.data))
        }
    }).catch(err=> {
        handleHttpError(err);
    }).finally(() => {
        dispatch(companySlice.actions.setCompaniesLoading(false))
    })
}