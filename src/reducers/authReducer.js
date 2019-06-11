import { 
    LOGIN_SUCCESS,
    USER_LOADED,
    LOGOUT_SUCCESS,
    USER_REGISTERED
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default function(state=initialState, action) {
    switch(action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case USER_REGISTERED:
            return {
                ...state,
                token: localStorage.setItem('token', action.payload.token),
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: localStorage.removeItem('token'),
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }
}