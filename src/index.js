import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./resources/static/templates/matherialadm/css/app.css"

/*import { Router, Route, hashHistory} from 'react-router';*/

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
