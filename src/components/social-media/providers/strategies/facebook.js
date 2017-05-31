"use strict"
/**
 * Created by garusis on 29/05/17.
 */

import $script from "scriptjs"
import Debug from "debug"
import {providers} from "../availableList"
import {configs} from "../../configs"

const error = Debug("SocialMedia:strategies:facebook:error")

let SDKPromise = null
let SDKIsLoaded = false

let FB

/**
 *
 * @returns {Promise}
 */
function loadSDK() {
  if (!SDKIsLoaded && SDKPromise) return SDKPromise

  if (SDKIsLoaded) return Promise.resolve()

  SDKPromise = new Promise(function (resolve, reject) {

    let {SDKUrl, init} = configs[providers.FB]

    $script.get(SDKUrl, function (err) {
      if (err) {
        error(`Error loading facebook SDK = `, err)
        return reject(err)
      }

      SDKIsLoaded = true
      FB = global.FB

      FB.init(init)

      resolve()
    })

  })
  return SDKPromise
}

function loginWrapper() {
  return new Promise(function (resolve, reject) {
    FB.login(function (response) {
      if (!response.authResponse) {
        return reject()
      }
      FB.api("/me", function (response) {
        resolve(response)
      })
    })
  })
}

export async function facebookLogin() {
  await loadSDK()
  return await loginWrapper()
}

export async function facebookShare() {
  await loadSDK()
}
