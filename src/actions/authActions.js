import axios from 'axios';

import { 
    BASE_URL,
    LOGIN_SUCCESS,
    USER_LOADED,
    LOGOUT_SUCCESS,
    USER_REGISTERED
} from './types';



export const loadUser = () => async (dispatch,getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
        try{
            let result = await axios.get(`${BASE_URL}/user`, config);
            dispatch({
                type: USER_LOADED,
                payload: result.data.user
            });
        } catch(error){
            console.log(error.response);
        }
    } 
}

export const registerUser = user => async dispatch => {
    console.log(user);
    const body = {
        user: user
    };

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let result = await axios.post(
            `${BASE_URL}/users`,
            JSON.stringify(body),
            config
        );
        dispatch({
            type: USER_REGISTERED,
            payload: result.data.user
        })

    } catch(error) {
        console.error(error)
    }

}

export const loginUser = (email,password) => async dispatch => {
    const body = {
        user: {
            email: email,
            password: password
        }
    };

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        let result = await axios.post(
            `${BASE_URL}/users/login`,
            JSON.stringify(body),
            config
        );
        console.log(result.data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data.user
        })
    } catch(error) {
        console.error(error)
    }
}

export const logoutUser = () => async dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}