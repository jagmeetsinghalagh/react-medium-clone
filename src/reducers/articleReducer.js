import { 
    GET_GLOBAL_ARTICLES, 
    GET_PROFILE_ARTICLES,
    LOADING_GLOBAL_ARTICLES,
    LOADING_PROFILE_ARTICLES
} from '../actions/types';

const initialState = {
    articles: [],
    isLoading: false
}

export default  (state = initialState,action) => {
    switch(action.type){

        case LOADING_GLOBAL_ARTICLES:
        case LOADING_PROFILE_ARTICLES:
            return {
                ...state,
                isLoading: true
            }
        case GET_GLOBAL_ARTICLES:
        case GET_PROFILE_ARTICLES:
            return {
                isLoading: false,
                articles: action.payload
            }   
        default:
            return state;
    }
}