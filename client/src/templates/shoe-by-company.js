import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShoeFilteredList from "../components/ShoeFilteredList"

export default function ShoeByCompany({ data }) {
  const shoes = data.allStrapiProduct
  const company = data.strapiCompany.name;
  
  
  return (
    <Layout>
      <ShoeFilteredList heading={`Brand: ${company}`} shoes={shoes.edges} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiProduct(
    sort: {order: ASC, fields: title}
    filter: {company: {slug: {eq: "bora-kata"}}}
    ) {
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
    strapiCompany(slug: {eq: $slug}) {
      name
    } 
  }
`