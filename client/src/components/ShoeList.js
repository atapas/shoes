import * as React from "react"
import ShoeCard from "./ShoeCard"
const ShoeList = ({shoes}) => {
  console.log(shoes);
  return (
    <div className="shoe-list">
    {shoes.map((shoe) => (
      <ShoeCard key={shoe.node.id} shoe={shoe.node} />
    ))}
    </div>
  )
  
  
}

export default ShoeList