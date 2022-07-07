import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ShoeDetails({ data }) {
  const shoe = data.strapiProduct
  return (
    <Layout>
      <div>
        <h1>{shoe.title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiProduct(slug: {eq: $slug}) {
      id
      title
      price
      status
      stock
      categories {
        name
      }
      company {
        name
      }
      description
      image {
        url
      }
      updatedAt
    }
  }
`