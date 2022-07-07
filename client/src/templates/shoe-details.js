import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ShoeDetails({ data }) {
  const shoe = data.strapiProduct
  return (
    <Layout>
      <div className="shoe-details">
        <div className="cover">
          <img src={`${process.env.GATSBY_STRAPI_API_URL}${shoe.image.url}`} alt={shoe.title} />
        </div>
        <div className="info">
          <h2>{shoe.title}</h2>
          <p>{shoe.description}</p>
          <p>${shoe.price}</p>
        </div>
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