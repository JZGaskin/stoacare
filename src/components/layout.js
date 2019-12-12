import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./Globals/nav-bar"

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

export default Layout
