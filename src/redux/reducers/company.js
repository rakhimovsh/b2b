import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companies: {
        items: [],
        loading: false
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
        }
    } 

})

export default companySlice.reducer