//generic page that will have the task to generate the restricted content

import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
// import Details from "../components/Details"
import Login from "../components/Login"
import Default from "../components/Default"
import PrivateRoute from "../components/PrivateRoute"

const Account = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/account/profile" component={Profile} />
        {/* <PrivateRoute path="/account/details" component={Details} /> */}
        <Login path="/account/login" />
        <Default path="/account" />
      </Router>
    </Layout>
  )
}

export default Account
