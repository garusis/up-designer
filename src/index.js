"use strict"
import React from "react"
import { render } from "react-dom"
import { browserHistory } from "react-router"
import { AppContainer } from "react-hot-loader"
import { syncHistoryWithStore } from "react-router-redux"
import injectTapEventPlugin from "react-tap-event-plugin"

import Root from "./components/Root"

import {configure as firebaseConfig} from "./firebase"
import configureStore from "./store/configureStore"
require("./favicon.ico")
import "./fonts/index.css"
import "./styles/styles.scss"

injectTapEventPlugin()
firebaseConfig()
const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app")
)

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("app")
    )
  })
}
