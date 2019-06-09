import { GET_PROFILE } from '../actions/types';

export default (state = null, action) => {
    if(action.type === GET_PROFILE){
        return action.payload;
    } else {
        return state;
    }
}