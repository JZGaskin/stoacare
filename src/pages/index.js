import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Info from "../components/Home/Info"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Plan from "../components/Home/Plan"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      tagline="We Lead the Residents to You"
      title="working"
      styleClass="default-background"
    />
    <Plan />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
