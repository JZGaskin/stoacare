import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import Header from "../Home/Header"
import Subheader from "../Home/Subheader"
import Calltoaction from "../Home/Calltoaction"

export default function BackgroundSection({ img, styleClass, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="hero-overlay"></div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-left">
              <h1 className="tagline text-white display-5 font-weight-bold ">
                <Header />
              </h1>
              <br />
              <h4 className="title text-white display-7 font-weight-bold">
                <Subheader />
              </h4>
              <br />
              <Link to="/about">
                <button className="btn text-uppercase btn-yellow">
                  <Calltoaction />
                </button>
              </Link>
            </div>
            <div
              className="col-sm-6
           text-center"
            ></div>
          </div>
        </div>
      </section>

      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
