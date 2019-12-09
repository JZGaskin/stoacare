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
      tagline="Put down the computer, we'll take the website from here."
      title="Take your time back and let us design and manage your website. You started your business because you're passionate about something. That something is not web design."
      styleClass="default-background"
    />
    <Plan />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "BlueGrad-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
