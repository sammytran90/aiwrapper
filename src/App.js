import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import login from './components/login.js';
import UserList from './containers/main';
import rootReducers from './reducers/index.js';
// import newAcount from './Components/newAcount.js';
// import application from './Components/application.js';
// import singleApp from './Components/singleApp.js';

const store = createStore(rootReducers,
    applyMiddleware(thunk)
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                        <Route exact path='/login' component={login} />
                        {/* <Route exact path='/newAcount' component={newAcount} />
                        <Route exact path='/login' component={login} />
                        <Route exact path='/login' component={login} />
                        <Route exact path='/login' component={login} /> */}

                        <Route path='/main' component={UserList} />
                    </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default hot(module)(App);

