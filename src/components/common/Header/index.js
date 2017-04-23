"use strict"
/**
 * Created by garusis on 21/04/17.
 */
import React from "react"
import { Sidebar, Menu, Icon} from "semantic-ui-react"
import "./styles.scss"

export default function Header () {
  return (
    <Sidebar as={Menu} animation="push" direction="top" visible="true" inverted>
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
    </Sidebar>
  )
}
