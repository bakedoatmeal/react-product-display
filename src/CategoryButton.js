import React from "react";

const CategoryButton = ({onClick, label, className, count}) => {
  return (
    <button className={className} onClick={onClick}>{label} <span className='ButtonLabel'>{count}</span></button>
  )
}

export default CategoryButton;