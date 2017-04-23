"use strict"
/**
 * Created by garusis on 20/04/17.
 */
import React from "react"
import PropTypes from "prop-types"
//import { Link, IndexLink } from "react-router"
import { Container } from "semantic-ui-react"

// This is a class-based component because the current
// version of hot reloading won"t hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render () {
    return (
      <Container textAlign="justified" fluid>
        {this.props.children}
      </Container>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
