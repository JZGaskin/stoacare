import React from "react"
import { StaticQuery, graphql } from "gatsby"

const subheader = () => (
  <StaticQuery
    query={graphql`
      {
        sanityMainHome {
          subheader
        }
      }
    `}
    render={data => <div>{data.sanityMainHome.subheader}</div>}
  />
)
export default subheader
