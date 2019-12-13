//generic page that will have the task to generate the restricted content

import React from "react"
import { Router } from "@reach/router" // comes with gatsby v2
import Layout from "../components/layout"
// import NavBar from "../components/Globals/Navbar"
import Profile from "../components/profile"
import Main from "./main" // NOT SHOWN
import PrivateRoute from "../components/PrivateRoute"
import Login from "../login"

// remember everything in /app/* is dynamic now!
const App = () => {
  return (
    <Layout>
      {/* <NavBar /> */}
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
