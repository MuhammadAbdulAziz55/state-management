import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoriesDetail = (props) => {
  const { name } = props.product;

  return (
    <div>
      <h6>This is your categories detail</h6>
      <p>Selected Category: {name}</p>
    </div>
  );
};

export default CategoriesDetail;
