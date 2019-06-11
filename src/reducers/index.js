import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import tagsReducer from './tagsReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

export default combineReducers({
    articles: articleReducer,
    tags: tagsReducer,
    profile: profileReducer,
    auth: authReducer
});