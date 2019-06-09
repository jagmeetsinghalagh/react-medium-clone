import axios from 'axios';

import { BASE_URL, GET_PROFILE } from './types';

export const getProfile = username => async dispatch => {
    let result = await axios.get(`${BASE_URL}/profiles/${username}`);
    dispatch({
        type: GET_PROFILE,
        payload: result.data.profile
    });
}