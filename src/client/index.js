import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import RequireAuth from './components/auth/require_auth';

import App from './components/app';
import Home from './containers/home';
import About from './components/About';

//This is for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import reducers from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

//This is for JWT applications, if needed
// const token = localStorage.getItem('token');
//
// if(token) {
//   store.dispatch( {type: AUTH_USER} );
// }

//FireBase URL =  pinterest-clone-react-fcc.firebaseio.com

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#project'));
