import React from "react"
import { StaticQuery, graphql } from "gatsby"

const mainTagline = () => (
  <StaticQuery
    query={graphql`
      {
        sanityMaintagline {
          maintagline
        }
      }
    `}
    render={data => <h1>{data.sanityMaintagline.maintagline}</h1>}
  />
)
export default mainTagline
