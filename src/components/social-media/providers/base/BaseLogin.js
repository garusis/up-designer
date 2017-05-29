"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import React, {PropTypes} from "react"
import Debug from "debug"

import {BaseLoginTrigger} from "../base"
import {loadProvider} from "../providerList"

const error = Debug("SocialMedia:BaseLogin:error")

function logInstantiationError() {
  error("BaseLogin can be instantiated directly")
}

export default class BaseLogin extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.providerType = null
    this.props.children.setProvider(this)
  }

  async loadProvider(){
    return await loadProvider(this.providerType)
  }

  async startRequestLogin(){
    logInstantiationError()
  }
}

BaseLogin.propTypes = {
  children: PropTypes.instanceOf(BaseLoginTrigger).isRequired
}
