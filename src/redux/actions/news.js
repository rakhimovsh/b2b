import { api } from '@/utils/api.js';
import { handleHttpError } from '@/utils/handleHttpError.js';
import { newsSlice } from '../reducers/news';


export const getNews = () => (dispatch) => {
    dispatch(newsSlice.actions.setNewsLoading(true))
    api()
     .get('/blog/posts/')
     .then(res => {
        if(res?.data) {
            dispatch(newsSlice.actions.setNews(res.data))
        }
     }).catch(err => {
        handleHttpError(err);
     }).finally(() => {
        dispatch(newsSlice.actions.setNewsLoading(false))
     })
}

