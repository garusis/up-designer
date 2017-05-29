"use strict"
/**
 * Created by garusis on 04/05/17.
 */
import $script from "scriptjs"

const error = Debug("SocialMedia:providerList:error")

const loadedProviders = {}

export const providers = {
  FB: "//connect.facebook.net/en_US/sdk.js"
}

export function loadProvider(provider) {
  let currentPromise = loadedProviders[provider]

  if (currentPromise instanceof Promise) return currentPromise

  let providerLoaded = !!currentPromise
  currentPromise = new Promise(function (resolve, reject) {
    if (providerLoaded) return setTimeout(resolve)

    loadedProviders[provider] = currentPromise

    $script.get(provider, function (err) {
      if (err) {
        error(`Error loading ${provider} = `, err)
        return reject()
      }

      loadedProviders[provider] = true
      resolve()
    })

  })
  return currentPromise
}
