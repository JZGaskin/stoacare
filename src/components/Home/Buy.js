import React from "react"
import Basicoption from "../Subscriptions/Basicoption"
import Standardoption from "../Subscriptions/Standardoption"
import Premiumoption from "../Subscriptions/Premiumoption"

export default function Buy() {
  return (
    <section className="py-5">
      <div className="text-center">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal text-white">Basic</h4>
                </div>
                <div className="card-body">
                  <h1>
                    <b>$29 </b>
                    <small className="text-muted">/ month</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Map Locator</li>
                    <li>Customized Listing</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>{" "}
                  <Basicoption />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal text-white">
                    Standard
                  </h4>
                </div>
                <div className="card-body">
                  <h1>
                    <b>$79 </b>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Map Locator</li>
                    <li>Customized Listing</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>{" "}
                  <Standardoption />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal text-white">
                    Premium
                  </h4>
                </div>
                <div className="card-body">
                  <h1>
                    <b>$149 </b>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Map Locator</li>
                    <li>Customized Listing</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>{" "}
                  <Premiumoption />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
