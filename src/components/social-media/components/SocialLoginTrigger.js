"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import React, {PropTypes} from "react"
import Debug from "debug"

const info = Debug("SocialMedia:components:SocialLoginTrigger:info")
const error = Debug("SocialMedia:components:SocialLoginTrigger:error")

export default class SocialLoginTrigger extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {loginData: {}}

    this.startRequestLogin = this.startRequestLogin.bind(this)
  }

  setProvider(provider) {
    this.provider = provider
  }

  async startRequestLogin() {
    try{

      let providerResponse = await this.provider.startRequestLogin(this.state.loginData)
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
  onErrorLogin: PropTypes.func.isRequired
}
