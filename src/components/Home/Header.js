import React from "react"
import { StaticQuery, graphql } from "gatsby"

const header = () => (
  <StaticQuery
    query={graphql`
      {
        sanityMainHome {
          header
        }
      }
    `}
    render={data => <div>{data.sanityMainHome.header}</div>}
  />
)
export default header
