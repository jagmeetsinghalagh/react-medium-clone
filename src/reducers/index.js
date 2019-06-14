import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import tagsReducer from './tagsReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import commentReducer from './commentReducer';

export default combineReducers({
    articleList: articleReducer,
    tags: tagsReducer,
    profile: profileReducer,
    auth: authReducer,
    commentList: commentReducer
});