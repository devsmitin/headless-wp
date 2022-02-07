import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1>About this site</h1>
      <p>
        This site is made using Gatsby JS for the simplicity and speed. You can visit source
        website{" "}
        <a href="http://wordpress.devsmit.in/" target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>
      <h2>Author:</h2>
      <Bio />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
