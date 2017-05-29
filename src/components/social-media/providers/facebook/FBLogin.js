"use strict"
/**
 * Created by garusis on 28/05/17.
 */
import {BaseLogin} from "../base"
import {providers} from "../providerList"

export default class FBLogin extends BaseLogin {
  constructor(props, context) {
    super(props, context)

    this.providerType = providers.FB
  }
}
