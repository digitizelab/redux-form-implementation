import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//BrowserRouter interacts with History library & decides what to do
//Route -> react component provides the config to show hide components
import {BrowserRouter, Route} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostsIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
