"use strict"
/**
 * Created by garusis on 23/04/17.
 */
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"

Page.propTypes = {
  children: PropTypes.element
}

export default function Page (props) {
  return (
    <div className="page">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}
