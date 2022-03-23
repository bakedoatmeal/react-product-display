import React from "react";

const CategoryButton = ({onClick, label, className}) => {
  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}

export default CategoryButton;