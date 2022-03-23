import React from "react";

const Product = ({obj}) => {
  return (
    <div key={obj.id} className="Product">
            <h1>{obj.name}</h1>
            <p>{obj.category}</p>
            <p>{obj.price}</p>
    </div>
  )
}

export default Product;