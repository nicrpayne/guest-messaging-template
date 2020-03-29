import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import displaySelectedReducer from '../src/Redux/Reducers/SelectionReducer'
import './index.css';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({
    displaySelectedReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
