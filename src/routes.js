'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import IndexPage from './components/IndexPage'
import ProblemPage from './components/ProblemPage'
import SolutionPage from './components/SolutionPage'
import StumblingBlocksPage from './components/StumblingBlocksPage'
import WhatNowPage from './components/WhatNowPage'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="problem" component={ProblemPage}/>
    <Route path="solution" component={SolutionPage}/>
    <Route path="stumblingblocks" component={StumblingBlocksPage}/>
    <Route path="whatnow" component={WhatNowPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)

export default routes;
