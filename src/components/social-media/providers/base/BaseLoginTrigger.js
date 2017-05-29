"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import React, {PropTypes} from "react"
import Debug from "debug"

const info = Debug("SocialMedia:BaseLoginTrigger:info")
const error = Debug("SocialMedia:BaseLoginTrigger:error")

export default class BaseLoginTrigger extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {loginData: {}}

    this.startRequestLogin = this.startRequestLogin.bind(this)
  }

  setProvider(provider) {
    this.provider = provider
  }

  startRequestLogin() {
    this.provider
      .startRequestLogin(this.state.loginData)
      .then(this.props.onSuccessLogin)
      .catch(this.props.onErrorLogin)
  }
}

BaseLoginTrigger.propTypes = {
  onSuccessLogin: PropTypes.func.isRequired,
  onErrorLogin: PropTypes.func.isRequired
}
