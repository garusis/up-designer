"use strict"
/**
 * Created by garusis on 04/05/17.
 */
import _ from "lodash"



import {configs} from "./configs"

export function config(provider, settings) {
  configs[provider] = _.assign(configs[provider] || {}, settings)
}

export {providers} from "./providers"

export {SocialLoginTrigger} from "./components"

