import {combineReducers} from 'redux';
//Adding redux form
import {reducer as formReducer} from 'redux-form';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer
});

export default rootReducer;
