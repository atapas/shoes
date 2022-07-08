
import React from "react"
import ShoeList from "./ShoeList"

const ShoeFilteredList = ({heading, shoes}) => {

  return(
    <div className="shoe-filtered-list">
      <h2>{heading}</h2>
      <ShoeList shoes = {shoes} />
    </div>

  )
}

export default ShoeFilteredList