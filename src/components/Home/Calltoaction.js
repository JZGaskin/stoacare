import React from "react"
import { StaticQuery, graphql } from "gatsby"

const calltoaction = () => (
  <StaticQuery
    query={graphql`
      {
        sanityMainHome {
          calltoaction
        }
      }
    `}
    render={data => <div>{data.sanityMainHome.calltoaction}</div>}
  />
)
export default calltoaction
