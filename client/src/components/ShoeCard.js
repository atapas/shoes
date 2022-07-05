import * as React from "react"
import { Link } from "gatsby"

const ShoeCard = ({ shoe }) => {
  return (
    <Link
      to={`/shoe/${shoe.slug}`}
      className="shoe-card" >
        <div className="img-container">
          <img src={`${process.env.GATSBY_STRAPI_API_URL}${shoe.image.url}`} alt={shoe.title} />
        </div>  
        <div className="details">
          <h2>{shoe.title} - ${shoe.price}</h2>
        </div>
    </Link>
  )
}

export default ShoeCard