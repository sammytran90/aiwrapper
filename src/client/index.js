import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SinglePageApp from './containers/SingleAppComponent.js';
import rootReducers from './reducers/index.js';

const store = createStore(rootReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <SinglePageApp />
    </Provider>,
    document.getElementById("root")
);