"use strict"
/**
 * Created by garusis on 20/04/17.
 */

import React from "react"
import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  )
}

export default NotFoundPage
