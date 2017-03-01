import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import IndexPage from './components/IndexPage'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';


ReactDOM.render(
  (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage}/>
        </Route>
      </Router>
  ),
  document.getElementById('root')
);
