/**
 * Created by garusis on 30/05/17.
 */

import {providers} from "./providers/availableList"

export const configs = {}

configs[providers.FB] = {
  init: {
    appId: process.env.SOCIAL_MEDIA_FB_APPID,
    version: process.env.SOCIAL_MEDIA_FB_API_VERSION || "v2.9"
  },
  SDKUrl: process.env.SOCIAL_MEDIA_FB_SDK_URL || "//connect.facebook.net/en_US/sdk.js"
}
