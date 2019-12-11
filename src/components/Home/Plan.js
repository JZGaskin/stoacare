import React from "react"
import { FaHandshake, FaFileContract, FaSmileBeam } from "react-icons/fa"

export default function Plan() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="plan-title text-center text-capitalize">
          custom websites made easy
        </h1>
        <p className="plan-subtitle text-center text-capitalize">
          Get a <strong>blazing fast website that just works</strong> in
          <strong> 3 easy steps</strong>
        </p>
        <br />
        <br />
        <div className="row">
          <div className="col-sm-4 text-center">
            <FaHandshake className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center text-strong">
              Consult with an expert
            </h6>
            <p>
              We'll evaluate your brand, discuss your needs and agree on next
              steps.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <FaFileContract className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Get a Customized Plan</h6>
            <p>
              We'll work with your goals to design the perfect website for your
              business.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <FaSmileBeam className="plan-icon text-center" />
            <br />
            <br />
            <h6 className="plan-label text-center">Look Great to the World</h6>
            <p>Sit back and relax knowing your business looks great online.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
