import {
    LOADING_COMMENTS,
    COMMENTS_LOADED,
    COMMENT_ADDED,
    COMMENT_DELETED
} from '../actions/types';

const initialState = {
    comments: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING_COMMENTS:
            return {
                comments: [],
                isLoading: true
            }
        case COMMENTS_LOADED:
            return {
                comments: action.payload,
                isLoading: false
            }
        case COMMENT_ADDED:
            return {
                comments: [...state.comments, action.payload],
                isLoading: false
            }
        case COMMENT_DELETED:
            return {
                comments: state.comments.filter(comment => comment.id !== action.payload),
                isLoading: false
            }
        default:
            return state
    }
}