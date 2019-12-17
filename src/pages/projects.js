import React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../GlobalStyles/global.scss';
import Layout from "../layouts/MainLayout"
import SEO from "../components/seo"
import CardSection from "../components/Elements/CardSection";
import MiniHero from "../components/Elements/MiniHero";

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <MiniHero title="My Projects" text="Have a look around" image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <React.Fragment>
          {console.log(data)}
          <h2>Browse Projects</h2>
          <CardSection content={data.allProjectsJson.nodes} />
        </React.Fragment>
      )}
    />
  </Layout>
)

export default Projects;

const projectsQuery = graphql`
  query AllProjectsQuery {
    allProjectsJson {
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
  }
`;
