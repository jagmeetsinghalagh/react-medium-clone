import axios from 'axios';

import {
    BASE_URL,
    LOADING_COMMENTS,
    COMMENTS_LOADED,
    COMMENT_ADDED,
    COMMENT_DELETED
} from './types';


export const getComments = (slug) => async dispatch => {
    dispatch({
        type: LOADING_COMMENTS
    });
    let result = await axios.get(`${BASE_URL}/articles/${slug}/comments`);
    dispatch({
        type: COMMENTS_LOADED,
        payload: result.data.comments
    });
}

export const addComment = (slug,body) => async (dispatch,getState) => {
    const token = getState().auth.token;
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
        let result = await axios.post(`${BASE_URL}/articles/${slug}/comments`,JSON.stringify(body),config);
        dispatch({
            type: COMMENT_ADDED,
            payload: result.data.comment
        });
    }
}

export const deleteComment = (slug,id) => async (dispatch,getState) => {
    const token = getState().auth.token;
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
        await axios.delete(`${BASE_URL}/articles/${slug}/comments/${id}`,config);
        dispatch({
            type: COMMENT_DELETED,
            payload: id
        });
    }
}