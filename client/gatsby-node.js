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

  const { data: categoryData } = await graphql(`
    query {
      allStrapiCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  categoryData.allStrapiCategory.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `category/${slug}`,
      component: require.resolve(`./src/templates/shoe-by-category.js`),
      context: { slug: slug },
    })
  })

  const { data: companyData } = await graphql(`
    query {
      allStrapiCompany {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  companyData.allStrapiCompany.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `company/${slug}`,
      component: require.resolve(`./src/templates/shoe-by-company.js`),
      context: { slug: slug },
    })
  })
}
