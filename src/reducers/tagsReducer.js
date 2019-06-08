import { GET_TAGS } from '../actions/types';

export default (state = [], action) => {
    if(action.type === GET_TAGS){
        return action.payload;
    } else {
        return state;
    }
}