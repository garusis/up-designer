"use strict"
/**
 * Created by garusis on 29/05/17.
 */
import React, {PropTypes} from "react"
import {providers, SocialLoginTrigger} from "../../social-media"

export class LoginButton extends SocialLoginTrigger {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <button type="button" onClick={this.startRequestLogin}>
        {this.props.children}
      </button>
    )
  }
}

LoginButton.propTypes = {
  children: PropTypes.node.isRequired,
  provider: PropTypes.oneOf(Object.values(providers)).isRequired,
  onSuccessLogin: PropTypes.func.isRequired,
  onErrorLogin: PropTypes.func.isRequired
}
