'use strict'
/**
 * Created by garusis on 17/04/17.
 */
import * as firebase from "firebase"
import defaultSettings from "./default_settings"

export let firebaseApp = null

export default function configure (settings = defaultSettings) {
    firebaseApp = firebase.initializeApp(settings)
}
