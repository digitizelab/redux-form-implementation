import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=2711293723';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    //Before sending the post request an OPTIONS request will be sent
    //CORS security feature
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        //Promise to run callback after the request completes
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}