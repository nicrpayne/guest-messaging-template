import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import './index.css';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';




const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    rootReducer,
    // adds all middleware to our project including saga and logger
    applyMiddleware(...middlewareList),
);




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
