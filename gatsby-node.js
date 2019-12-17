const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'ProjectsJson') {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: node.title
        })
    }
    if(node.internal.type === 'ProjectCatagoriesJson') {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: node.lang
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectResult = await graphql(`
     query {
         allProjectsJson {
             edges {
                 node {
                     fields {
                         slug
                     }
                 }
             }
         }
     }
    `)
    console.log(JSON.stringify(projectResult, null, 4));
    // const catResult = await graphql(`
    //  query {
    //      allProjectCatagoriesJson {
    //          edges {
    //              node {
    //                  fields {
    //                      slug
    //                  }
    //              }
    //          }
    //      }
    //  }
    // `)
    // console.log(JSON.stringify(catResult, null, 4));

    projectResult.data.allProjectsJson.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/projects/project-page.js`),
            context: {
                slug: node.fields.slug
            }
        })
    });

    // catResult.data.allProjectsCatagoriesJson.edges.forEach(({node}) => {
    //     createPage({
    //         path: node.fields.slug,
    //         component: path.resolve(`./src/templates/catagories/catagories.js`),
    //         context: {
    //             slug: node.fields.slug
    //         }
    //     })
    // });
}