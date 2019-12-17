// import React from 'react';
// import { graphql } from 'gatsby';
// import '../../GlobalStyles/global.scss';
// import Layout from '../../layouts/MainLayout';
// import MiniHero from '../../components/Elements/MiniHero';
// import styles from './cat-page.module.scss';

// const ProjectPageTemplate = ({ data }) => {
//     console.log(data);
//     return (
//         <Layout>
//             {/* <MiniHero image={content.image} />
//             <div className={styles.Content__Block}>
//                 <h1>{data.allProjectsCatagoriesJson.title}</h1>
//                 <p>{data.allProjectsCatagoriesJson.text}</p>
//                 <Button text="View Project" link={data.allProjectsCatagoriesJson.projectUrl} isLink></Button>
//                 <Button text="View Github" link={data.allProjectsCatagoriesJson.projectUrl} isLink></Button>
//             </div> */}
//         </Layout>
//     )
// }

// export default ProjectPageTemplate;

// export const catPageQuery = graphql`
// query($slug: String!) {
//   allProjectCatagoriesJson(filter: {fields: {slug: {eq: $slug}}}) {
//     edges {
//       node {
//         id
//         lang
//         image
//         text
//         title
//         projectUrl
//       }
//     }
//   }
// }
// `;