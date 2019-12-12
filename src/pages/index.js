import React from "react"
import { graphql, Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import Info from "../components/Home/Info"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Plan from "../components/Home/Plan"
import Buy from "../components/Home/Buy"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      tagline="Residents need a new home, we help get them there."
      title="Families needing to find a new home for their loved ones are guided to your facility."
      styleClass="default-background"
    />
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/account/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/account/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
    <Buy />
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
