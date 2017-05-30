"use strict"
/**
 * Created by garusis on 29/05/17.
 */
import React, {PropTypes} from "react"
import {SocialLoginTrigger, SocialLogin} from "../../social-media"

class Button extends SocialLoginTrigger {
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

export class LoginButton extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <SocialLogin>
        <Button
          onSuccessLogin={this.props.onSuccessLogin}
          onErrorLogin={this.props.onErrorLogin}>
          {this.props.children}
        </Button>
      </SocialLogin>
    )
  }
}

LoginButton.propTypes = {
  children: PropTypes.node.isRequired,
  onSuccessLogin: PropTypes.func.isRequired,
  onErrorLogin: PropTypes.func.isRequired
}
