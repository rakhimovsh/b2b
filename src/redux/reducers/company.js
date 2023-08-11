import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companies: {
        items: [],
        loading: false
    },
    singleCompany: {
        item: null,
        loading: true,
    }
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompanies: (state, action) => {
            state.companies.items = action.payload
        },
        setCompaniesLoading: (state, action) => {
            state.companies.loading = action.payload
        },
        setSingleCompany: (state, action) => {
            state.singleCompany.item = action.payload
        },
        setSingleCompanyLoading: (state, action) => {
            state.singleCompany.loading = action.payload
        }
    } 

})

export default companySlice.reducer