"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import React, {PropTypes} from "react"
import Debug from "debug"

import SocialLoginTrigger from "./SocialLoginTrigger"
import {providers, strategies} from "../providers"

export class SocialLogin extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.props.children.setProvider(this)
  }

  async startRequestLogin() {
    let loginStrategy = strategies[`${this.props.provider}Login`]
    return await loginStrategy()
  }
}

SocialLogin.propTypes = {
  children: PropTypes.instanceOf(SocialLoginTrigger).isRequired,
  provider: PropTypes.oneOf(Object.values(providers))
}
