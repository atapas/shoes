exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiProduct {
        edges {
          node {    
            slug
          }
        }
      }
    }
  `)
  data.allStrapiProduct.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/shoe-details.js`),
      context: { slug: slug },
    })
  })
}
