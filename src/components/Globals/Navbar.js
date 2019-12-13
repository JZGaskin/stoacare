import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

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
      {
        id: 4,
        path: "/app",
        text: "login",
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

            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                Schedule a Call
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
