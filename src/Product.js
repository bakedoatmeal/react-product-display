import React from "react";
import Star from "./Star";

const Product = ({obj}) => {

  // const stars = () => {
  //   const starsString = parseInt(obj.rating)*'⭐'
  //   console.log('Stars:', starsString)
  //   return starsString
  // }

  const starsNum = parseInt(obj.rating)
  const starsString = Array(starsNum).fill(<Star/>)

  return (
    <div key={obj.id} className="Product">
            <h1>{obj.name}</h1>
            <p>{obj.category}</p>
            <p>{obj.price}</p>
            <p>Units: {obj.units}</p>
            
            <p>Rating: {starsString}</p>
    </div>
  )
}

export default Product;