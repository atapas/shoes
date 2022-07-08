import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function ShoeDetails({ data }) {
  const shoe = data.strapiProduct
  const [quantity, setQuantity] = useState(1)
  return (
    <Layout>
      <div className="shoe-details">
        <div className="cover">
          <img src={`${process.env.GATSBY_STRAPI_API_URL}${shoe.image.url}`} alt={shoe.title} />
        </div>
        <div className="info">
          <div className="info-heading">
            <h2>{shoe.title}</h2> 
            <Link to={`/category/${shoe.categories[0].slug}`}>
              <span>{shoe.categories[0].name}</span>
            </Link> { ' '}
            from {' '}
            <Link to={`/company/${shoe.company.slug}`}>
              {shoe.company.name}
            </Link>
          </div>

          <div className="info-body">
            <p>{shoe.description}</p>
            <span>${shoe.price} per unit</span> { ' - '}
            <>
              {
                shoe.stock > 0 ?
                  <span>{shoe.stock} In Stock</span> :
                  <span>Out of Stock</span>
              }
            </>
          </div>

          <div className="info-purchase">
            {
              shoe.stock > 0 ?
              <>
                <p>
                  I want to purchase {' '}
                  <input 
                    type="number" 
                    min="1" 
                    max={shoe.stock} 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    /> {' '} unit
                </p>
                <p className="price">Total Price: ${quantity * shoe.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </> :
              <>
                <p>OOPS!!! That's gone. We will let you know when the fresh stock is available.</p>
                <button className="btn btn-secondary">Notify Me!</button>
              </>
            }
            
          </div>
          
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
        slug
      }
      company {
        name
        slug
      }
      description
      image {
        url
      }
      updatedAt
    }
  }
`