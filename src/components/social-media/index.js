"use strict"
/**
 * Created by garusis on 04/05/17.
 */
import _ from "lodash"



export const providersSettings = {}

export function config(provider, settings) {
  providersSettings[provider] = _.assign(providersSettings[provider] || {}, settings)
}
