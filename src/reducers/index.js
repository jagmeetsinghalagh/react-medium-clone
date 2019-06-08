import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import tagsReducer from './tagsReducer';

export default combineReducers({
    globalArticles: articleReducer,
    userArticles: articleReducer,
    tags: tagsReducer
});