import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

//Imports Netlify Identity script into HTML of Site
//Must be called from react life-cycle function
//Will not work if called at GatsbyBuild due to document not defined
function initNetlifyIdentity() {
  console.log("initNetlifyIdentity was called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) netlifyIdentity.open()
  else console.log("netlifyIdentity not defined")
}

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/pricing",
        text: "pricing",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    initNetlifyIdentity()
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* //links to pages */}
        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}

            {/* //link to login modal */}
            <div className={this.state.css}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    onClick={() => {
                      openNetlifyModal()
                    }}
                    className="nav-link text-capitalize"
                  >
                    Login
                  </Link>
                </li>

                <Link to="/about">
                  <button className="btn text-uppercase btn-yellow">
                    Schedule a Call
                  </button>
                </Link>
              </ul>
            </div>
            {/* <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                Schedule a Call
              </button>
            </Link> */}
          </ul>
        </div>
      </nav>
    )
  }
}
