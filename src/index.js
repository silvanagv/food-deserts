import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import IndexPage from './components/IndexPage'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ProblemPage from './components/ProblemPage'
import SolutionPage from './components/SolutionPage'
import StumblingBlocksPage from './components/StumblingBlocksPage'
import WhatNowPage from './components/WhatNowPage'
import NotFoundPage from './components/NotFoundPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import SourcesPage from './components/SourcesPage'

ReactDOM.render(
  (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage}/>
          <Route path="problem" component={ProblemPage}/>
          <Route path="solution" component={SolutionPage}/>
          <Route path="stumblingblocks" component={StumblingBlocksPage}/>
          <Route path="whatnow" component={WhatNowPage}/>
          <Route path="about" component={AboutPage}/>
          <Route path="contact" component={ContactPage}/>
          <Route path="sources" component={SourcesPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
  ),
  document.getElementById('root')
);
