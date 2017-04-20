"use strict"
/**
 * Created by garusis on 17/04/17.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
)
