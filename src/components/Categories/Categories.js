import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoriesDetail from "../CategoriesDetail/CategoriesDetail";

const allProduct = [
  { name: "Lenovo", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Dell", category: "laptop" },
  { name: "Samsung", category: "mobile" },
  { name: "Motorola", category: "mobile" },
  { name: "Apple", category: "mobile" },
  { name: "Cannon", category: "camera" },
  { name: "Nikon", category: "camera" },
  { name: "Sony", category: "camera" },
];

const Categories = () => {
  const [category] = useContext(CategoryContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const matchedProduct = allProduct.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProducts(matchedProduct);
  }, [category]);

  return (
    <div>
      <h4>Select your categories</h4>

      {products.map((pd) => (
        <CategoriesDetail product={pd}></CategoriesDetail>
      ))}
    </div>
  );
};

export default Categories;
