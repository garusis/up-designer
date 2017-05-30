"use strict"
/**
 * Created by garusis on 21/04/17.
 */
import React from "react"
import {Sidebar, Menu, Icon} from "semantic-ui-react"
import {LoginButton} from "../LoginButton"
import {providers as socialMediaProviders} from "../../social-media"

import "./styles.scss"

function success() {
  console.log("sucesssss")
}

function error() {
  console.log("errrroooooor")
}

export function Header() {
  return (
    <Sidebar as={Menu} animation="push" direction="top" visible={true}>
      <Menu.Item name="home">
        <Icon name="home"/>
        Home
      </Menu.Item>
      <Menu.Item name="gamepad">
        <Icon name="gamepad"/>
        Games
      </Menu.Item>
      <Menu.Item name="camera">
        <Icon name="camera"/>
        Channels
      </Menu.Item>
      <Menu.Item>
        <LoginButton onSuccessLogin={success} onErrorLogin={error} provider={socialMediaProviders.FB}>
          Facebook
        </LoginButton>
      </Menu.Item>
    </Sidebar>
  )
}
