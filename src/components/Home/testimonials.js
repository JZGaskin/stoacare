import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.section`
  background-color: #343a40 !important;
  padding: 2px;
`
const Container = styled.div`
  display: grid;
  margin-top: 40px !important;
  margin-bottom: 40px !important;
  align-self: center;
`
const Title = styled.h1`
  color: #aaffff;
`
const Subtitle = styled.h5`
  color: #aaffff;
  font-style: italic;
`
const Card = styled.div`
  border-radius: 20px !important;
  box-shadow: 2px 2px 10px 0px rgb(100, 108, 170);
  width: 20rem;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  position: relative;

  /* margin-left: 25px; */
`
const CardHeader = styled.header`
  img {
    border: 5px solid white !important;
  }
  .outside {
    position: absolute;
    left: -11%;
  }
  .margin-left {
    margin-left: 30px !important;
  }
`
const Small = styled.small`
  font-size: 14px;
  margin-bottom: 7px;
`
const CardBody = styled.div`
  /* border-radius: 0px !important;
  box-shadow: 2px 2px 10px 0px rgb(100, 108, 170); */
  background-color: var(--mainWhite);
  /* width: 20rem; */
  /* margin-left: 15px; */
  @media (max-width: 390px) {
    .card {
      width: unset !important;
    }
  }
`
const P = styled.p`
  font-size: 14px;
  margin-bottom: 7px;
  .bold {
    font-weight: 500;
  }
`
const Hr = styled.hr`
  justify-content: center !important;
  align-self: center !important;
  width: 80%;
`
const CardFooter = styled.footer`
  border-radius: 20px !important;
`
export default function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "BRme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Container className="container">
        <Title className="ttitle text-center text-capitalize color-white">
          What People Are Saying About Us
        </Title>
        <Subtitle className="plan-subtitle text-center text-capitalize">
          <i>Don't just take it from us, let our customers do the talking!</i>
        </Subtitle>
        <div className="row">
          <div className="col-sm-4 d-flex">
            <Card className="card">
              <CardHeader className="card-header bg-white mt-4 border-0">
                <div className="media ">
                  <img
                    className="outside align-self-center rounded-circle img-fluid"
                    src="https://i.imgur.com/At1IG6H.png"
                    width="70"
                    height="70"
                    alt="headshot1"
                  />
                </div>
                <div className="media-body my-auto margin-left">
                  <P className="font-weight-bold mb-0 ">Adam Thomas</P>
                  <Small className="text-muted font-italic">
                    VP Information Technology
                  </Small>
                </div>
              </CardHeader>
              <CardBody className="card-body px-sm-5 ">
                <P className="bold">
                  " Growth of data is exponential and our ability to get true
                  insight thatmatter was challenging with classNameic,
                  traditional Bi tools. Vertix allow us to unserstand what is
                  driving exceptions so we can take action "{" "}
                </P>
              </CardBody>
              <Hr className="my-0" />
              <CardFooter className="card-footer py-0 my-0 bg-white border-0">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/eKx0vzf.png"
                      width="100"
                      height="100"
                      alt="logo1"
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-4 d-flex">
            <Card className="card">
              <CardHeader className="card-header bg-white mt-4 border-0">
                <div className="media ">
                  <img
                    className="align-self-center rounded-circle outside img-fluid"
                    src="https://i.imgur.com/kkjs7EC.png"
                    width="70"
                    height="70"
                    alt="headshot2"
                  />
                </div>
                <div className="media-body my-auto margin-left">
                  <P className="font-weight-bold mb-0 ">Eleya Kyamack</P>
                  <Small className="text-muted font-italic ">
                    VP Business Insights
                  </Small>
                </div>
              </CardHeader>
              <CardBody className="card-body px-sm-5 ">
                <div className="row">
                  <div className="col">
                    <P className="bold">
                      " Growth of data is exponential and our ability to get
                      true insight that matter was challenging with classNameic,
                      traditional Bi tools. Vertix allow us to unserstand what
                      is driving exceptions so we can take action "{" "}
                    </P>
                  </div>
                </div>
              </CardBody>
              <Hr className="my-0" />
              <CardFooter className="card-footer bg-white border-0">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/hAIdxvG.jpg"
                      width="60"
                      height="60"
                      alt="logo2"
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-4 d-flex">
            <Card className="card">
              <CardHeader className="card-header bg-white mt-4 border-0">
                <div className="media ">
                  <Img
                    className="align-self-center rounded-circle outside img-fluid"
                    fluid={data.placeholderImage.childImageSharp.fluid}
                    width="70"
                    height="70"
                    alt="headshot3"
                  />
                </div>
                <div className="media-body my-auto margin-left">
                  <P className="font-weight-bold mb-0 ">Eleya Kyamack</P>
                  <Small className="text-muted font-italic ">
                    VP Business Insights
                  </Small>
                </div>
              </CardHeader>
              <CardBody className="card-body px-sm-5 ">
                <div className="row">
                  <div className="col">
                    <P className="bold">
                      " Growth of data is exponential and our ability to get
                      true insight that matter was challenging with classNameic,
                      traditional Bi tools. Vertix allow us to unserstand what
                      is driving exceptions so we can take action "{" "}
                    </P>
                  </div>
                </div>
              </CardBody>
              <Hr className="my-0" />
              <CardFooter className="card-footer bg-white border-0">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <img
                      className="img-fluid"
                      src="https://i.imgur.com/hAIdxvG.jpg"
                      width="60"
                      height="60"
                      alt="logo2"
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
