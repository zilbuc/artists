import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner, Section, Title, InfoWrapper } from '../utils';
import contactBcg from '../images/bcg/contactBcg.jpg';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ICON = graphql`
  query {
    iconQuery: file(relativePath: {eq: "thumb_icon.png"}) {
      childImageSharp {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactPage = () => (
  <Layout>
  <PageHeader img={contactBcg}>
    <Banner title='contact us' subtitle={`let's get in touch`}></Banner>
  </PageHeader>
  <Section>
    <Title message='like us on' title='twinstagram'></Title>
    <InfoWrapper>
      <StaticQuery query={ICON} render={data => <Img fluid={data.iconQuery.childImageSharp.fluid} alt='thumbIcon' style={{ maxWidth: '400px'}}/> } />
    </InfoWrapper>
  </Section>

  </Layout>
)

export default ContactPage
