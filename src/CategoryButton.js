import React from "react";

const CategoryButton = ({onClick, label}) => {
  return (
    <button className="CategoryButton" onClick={onClick}>{label}</button>
  )
}

export default CategoryButton;