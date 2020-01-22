import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"

import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
export default Layout
