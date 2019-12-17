import React from 'react';
import '../../GlobalStyles/global.scss';
import { graphql } from 'gatsby';
import Layout from '../../layouts/MainLayout';
import MiniHero from '../../components/Elements/MiniHero';
import Button from '../../components/Utils/Button';
import styles from './project-page.module.scss';

const ProjectPageTemplate = ({ data }) => {
  const content = data.allProjectsJson.edges[0].node;
    return (
        <Layout>
          <MiniHero image={content.imgae} />
          {console.log(data)}
            <div className={styles.Content__Block}>
              <h1>{content.title}</h1>
              <p>{content.text}</p>
              <Button text="View Project" link={content.projectUrl} isLink></Button>
              <Button text="View Github" link={content.projectUrl} isLink></Button>
            </div>
        </Layout>
    )
}

export default ProjectPageTemplate;

export const projectsPageQuery = graphql`
query($slug: String!) {
    allProjectsJson(filter: {fields: {slug: {eq: $slug}}}) {
      edges {
        node {
          id
          gitUrl
          lang
          image
          text
          section
          projectUrl
          title
        }
      }
    }
}
`;