import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import IndexPage from './components/IndexPage'
import ProblemPage from './components/ProblemPage'
import SolutionPage from './components/SolutionPage'
import StumblingBlocksPage from './components/StumblingBlocksPage'
import WhatNowRoutePage from './components/WhatNowRoutePage'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <ProblemRoute path="problem" component={ProblemPage}/>
    <SolutionRoute path="solution" component={SolutionPage}/>
    <StumblingBlocksRoute path="stumblingblocks" component={StumblingBlocksPage}/>
    <WhatNowRoute path="whatnow" component={WhatNowRoutePage}/>
    <Route path="*" component={NotFoundPage}/>
    </Route>
)

export default routes;
