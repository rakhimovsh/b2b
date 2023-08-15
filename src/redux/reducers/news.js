import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    news: {
        items: [],
        loading: false
    }
} 


export const newsSlice = createSlice({
    name: 'newsInfo',
    initialState,
    reducers: {
        setNews: (state, action) =>{
            state.news.items = action.payload
        },
        setNewsLoading: (state, action) => {
            state.news.loading = action.payload
        }    
    }
})

export default newsSlice.reducer