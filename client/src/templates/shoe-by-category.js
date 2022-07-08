import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShoeFilteredList from "../components/ShoeFilteredList"

export default function ShoeByCategory({ data }) {
  const shoes = data.allStrapiProduct
  const category = data.strapiCategory.name;
  
  
  return (
    <Layout>
      <ShoeFilteredList heading={category} shoes={shoes.edges} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiProduct(
    sort: {order: ASC, fields: title}
    filter: {categories: {elemMatch: {slug: {eq: $slug}}}}
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
    strapiCategory(slug: {eq: $slug}) {
      name
    } 
  }
`