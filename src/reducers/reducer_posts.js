import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;
            //Include all the posts we have fetched already
            //[] is not an array here, key interpolation -> make a new key on object
            return {...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
}