import React from "react"
import { FaStop } from "react-icons/fa"

export default function Valueprop() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <FaStop className="bullet text-center" />
            <br />
            <br />

            <h6 className="plan-label text-center text-strong">
              You need to attract residents
            </h6>
          </div>

          <div className="col-sm-4 text-center">
            <FaStop className="bullet text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center text-strong">
              Marketing for residents is overwhelming
            </h6>
          </div>
          <div className="col-sm-4 text-center">
            <FaStop className="bullet text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center text-strong">
              You shouldn't have to become a marketing expert
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
