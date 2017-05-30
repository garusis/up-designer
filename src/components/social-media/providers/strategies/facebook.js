"use strict"
/**
 * Created by garusis on 29/05/17.
 */

import $script from "scriptjs"
import Debug from "debug"

const error = Debug("SocialMedia:strategies:facebook:error")

const SDKUrl = "//connect.facebook.net/en_US/sdk.js"
let SDKPromise = null
let SDKIsLoaded = false


/**
 *
 * @returns {Promise}
 */
function loadSDK() {
  if (!SDKIsLoaded && SDKPromise) return SDKPromise

  if (SDKIsLoaded) return Promise.resolve()

  SDKPromise = new Promise(function (resolve, reject) {
    $script.get(SDKUrl, function (err) {
      if (err) {
        error(`Error loading facebook SDK = `, err)
        return reject(err)
      }

      SDKIsLoaded = true
      global.FB.init({
        appId            : "your-app-id",
        autoLogAppEvents : true,
        xfbml            : true,
        version          : "v2.9"
      })

      resolve()
    })
  })
  return SDKPromise
}


export async function facebookLogin() {
  await loadSDK()
}

export async function facebookShare() {
  await loadSDK()
}
