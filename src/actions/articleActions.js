import axios from 'axios';

import { 
    BASE_URL,
    GET_GLOBAL_ARTICLES,
    GET_PROFILE_ARTICLES,
    LOADING_GLOBAL_ARTICLES,
    LOADING_PROFILE_ARTICLES
} from './types';

export const getGlobalArticles = () => async dispatch => {

    dispatch({
        type: LOADING_GLOBAL_ARTICLES
    });

    let result = await axios.get(`${BASE_URL}/articles`);
    dispatch({
        type: GET_GLOBAL_ARTICLES,
        payload: result.data.articles
    });
}

export const getProfileArticles = author => async dispatch => {

    dispatch({
        type: LOADING_PROFILE_ARTICLES
    });

    let result = await axios.get(`${BASE_URL}/articles/?author=${author}`);
    dispatch({
        type: GET_PROFILE_ARTICLES,
        payload: result.data.articles
    });
}

