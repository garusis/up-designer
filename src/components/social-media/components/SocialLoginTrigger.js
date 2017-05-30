"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import React, {PropTypes} from "react"
import Debug from "debug"
import {providers, strategies} from "../providers"


const info = Debug("SocialMedia:components:SocialLoginTrigger:info")
const error = Debug("SocialMedia:components:SocialLoginTrigger:error")

export class SocialLoginTrigger extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {loginData: {}}

    this.startRequestLogin = this.startRequestLogin.bind(this)
  }

  async startRequestLogin() {
    try{
      let loginStrategy = strategies[`${this.props.provider}Login`]
      let providerResponse = await loginStrategy()

      info("onSuccessLogin, loginData = ", providerResponse)
      this.props.onSuccessLogin(providerResponse)
    }catch (err){
      error("onErrorLogin, error = ", err)
      this.props.onErrorLogin(err)
    }
  }
}

SocialLoginTrigger.propTypes = {
  onSuccessLogin: PropTypes.func.isRequired,
  onErrorLogin: PropTypes.func.isRequired,
  provider: PropTypes.oneOf(Object.values(providers)).isRequired
}
