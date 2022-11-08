import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Shipment = () => {
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <div>
      <h3>This is shipment</h3>
      <button onClick={() => setCategory(category + 1)}>
        Increment from shipment
      </button>
    </div>
  );
};

export default Shipment;
