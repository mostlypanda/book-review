import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddlware} from 'redux';
import ReduxThunk from 'redux-thunk';


const createStoreWithMiddleware =applyMiddlware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>

    </Provider>
    ,document.getElementById('root'));
