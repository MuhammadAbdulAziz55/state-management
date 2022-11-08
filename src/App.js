import "./App.css";
import Home from "./components/Header/Home/Home";
import Header from "./components/Header/Header";
import Shipment from "./components/Shipment/Shipment";
import { createContext, useState } from "react";
export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("Laptop");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h3> Count value: {category}</h3>
      <Header />
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
