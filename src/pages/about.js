import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Info from "../components/Home/Info"

import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="We design and manage modern websites so you can focus on success."
      styleClass="default-background"
    />

    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
