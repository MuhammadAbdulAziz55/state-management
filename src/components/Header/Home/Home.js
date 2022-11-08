import React, { useContext } from "react";
import { CategoryContext } from "../../../App";
import Categories from "../../Categories/Categories";

const Home = () => {
  const category = useContext(CategoryContext);

  return (
    <div style={{ border: "1px solid purple" }}>
      <h2>This is home: {category}</h2>
      <p>Abdul Aziz: {category}</p>

      <Categories></Categories>
    </div>
  );
};

export default Home;
