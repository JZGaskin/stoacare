import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
//import Image from "./image"

export default function BackgroundSection({
  img,
  tagline,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-left">
              <h1 className="title text-white display-5 font-weight-bold">
                {tagline}
              </h1>
              <br />
              <h5 className="title text-white display-7 font-weight-bold">
                {title}
              </h5>
              <br />
              <Link to="/about">
                <button className="btn text-uppercase btn-yellow">
                  Schedule a Call
                </button>
              </Link>
            </div>

            <div className="col-sm-6 text-center">{/* <Image /> */}</div>
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
