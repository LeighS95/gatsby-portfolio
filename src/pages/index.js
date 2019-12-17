import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import '../GlobalStyles/global.scss';
import Layout from "../layouts/MainLayout"
import SEO from "../components/seo"
import Hero from '../components/Elements/Hero';
import CardSection from '../components/Elements/CardSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <StaticQuery
      query={homeQuery}
      render={data => (
        <React.Fragment>
          <h2>Browse Projects</h2>
          <CardSection content={data.allProjectsJson.nodes} />
          <h2>Browse by language</h2>
          <CardSection content={data.allProjectCatagoriesJson.nodes} />
        </React.Fragment>
      )}
    />
  </Layout>
)

const homeQuery = graphql`
  query ProjectsQuery {
    allProjectsJson(limit: 3) {
      nodes {
        id
        gitUrl
        lang
        image
        text
        section
        projectUrl
        title
        fields {
          slug
        }
      }
    }
    allProjectCatagoriesJson {
      nodes {
        id
        image
        lang
        projectUrl
        text
        title
      }
    }
  }
`;

export default IndexPage;