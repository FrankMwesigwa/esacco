import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/index';
import { AUTHENTICATED, USER } from './actions/ActionTypes';

import App from './components/App';
import Login from './components/user-authorization/Login';
import Logout from './components/user-authorization/Logout'
import UserAuthentication from './components/user-authorization/UserAuthentication';
import NoUserAuthentication from './components/user-authorization/NoUserAuthentication';

const history = createHistory();   

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// if user returns true, dispach user to be authenticated
if (USER) {
    store.dispatch({ type: AUTHENTICATED });
  }

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <div>
                <Switch>
                    <Route exact path="/login" component={NoUserAuthentication(Login)}/>
                    <Route path="/logout" component={NoUserAuthentication(Logout)}/>
                    <Route path="/" component={UserAuthentication(App)} />
                </Switch>
            </div>    
        </Router>
    </Provider>, document.getElementById('root')
);

