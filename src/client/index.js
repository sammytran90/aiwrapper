import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import SinglePageApp from './containers/SingleAppComponent.js';
import rootReducers from './reducers/index.js';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,
    applyMiddleware(ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <SinglePageApp />
    </Provider>,
    document.getElementById("root")
);