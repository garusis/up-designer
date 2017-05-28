// Set up your root reducer here...
import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import {socialMediaReducer} from "../components/social-media"

export default combineReducers({
  social: socialMediaReducer,
  routing: routerReducer
})
