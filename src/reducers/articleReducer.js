import { GET_GLOBAL_ARTICLES } from '../actions/types';

export default  (state = [],action) => {
    switch(action.type){
        case GET_GLOBAL_ARTICLES:
            return action.payload;
        default:
            return state;
    }
}