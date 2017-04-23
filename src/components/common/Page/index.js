"use strict"
/**
 * Created by garusis on 23/04/17.
 */
import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"

import "./styles.scss"

Page.propTypes = {
  children: PropTypes.element
}

export default function Page (props) {
  return (
    <div className="page">
      <Header/>
      <section className="main-content">
        {props.children}
      </section>
      <Footer/>
    </div>
  )
}
