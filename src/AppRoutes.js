
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './App'
import IndexPage from './components/IndexPage'



  ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage}/>
        </Route>
      </Router>
  ), document.getElementById('root'))
