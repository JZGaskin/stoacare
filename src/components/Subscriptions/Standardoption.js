import React from "react"

const Standardoption = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_yhWmIx2CU4WNONLOsBIeJnsi0050nfgRkJ")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ plan: "plan_GKvBgAIcOaYiKX", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        type="button"
        className="btn-subs btn-lg btn-block btn-primary"
        onClick={event => this.redirectToCheckout(event)}
      >
        Standard Plan
      </button>
    )
  }
}
export default Standardoption
