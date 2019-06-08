import axios from 'axios';

import { BASE_URL,GET_GLOBAL_ARTICLES } from './types';

export const getGlobalArticles = () => async dispatch => {
    let result = await axios.get(`${BASE_URL}/articles`);
    dispatch({
        type: GET_GLOBAL_ARTICLES,
        payload: result.data.articles
    });
}
