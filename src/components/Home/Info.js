import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
import Calltoaction from "../Home/Calltoaction"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="This is what we do" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Most business owners and administrators want to keep their
              facility full but don’t want to become a marketing expert. We
              offer a online marketing hub that drives new residents to you so
              you can focus on the growth and success of your business.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                <Calltoaction />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
