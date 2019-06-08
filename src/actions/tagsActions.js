import axios from 'axios';

import { GET_TAGS, BASE_URL } from './types';

export const getTags = () => async dispatch => {
    let result = await axios.get(`${BASE_URL}/tags`);
    dispatch({
        type: GET_TAGS,
        payload: result.data.tags
    })
}