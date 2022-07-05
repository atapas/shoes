import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShoeList from "../components/ShoeList"

import { useStaticQuery, graphql } from "gatsby"

import '../style/shoes.css'

const IndexPage = () => {
  const { allStrapiProduct } = useStaticQuery(graphql`
    query {
      allStrapiProduct(sort: {order: ASC, fields: title}) {
        edges {
          node {
            image {
              url
            }
            slug
            price
            title
            id
            stock
            status
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
        <ShoeList shoes={allStrapiProduct.edges} />
    </Layout>
  )
}

export default IndexPage
