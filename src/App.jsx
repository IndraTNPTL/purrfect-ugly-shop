import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
// IMPORT PAGES

import Home from "./Pages/Home";
import About from "./Pages/About";
import AllWomen from "./Pages/AllWomen";
import AllMen from "./Pages/AllMen";
import AllJewelery from "./Pages/AllJewelery";
import AllElectronics from "./Pages/AllElectronics";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

// IMPORT COMPONENTS
import NavbarAndFooterAndContactTooltip from "./Components/NavbarAndFooterAndContactTooltip";

function App() {
  const [allProducts, setHome] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState(allProducts);

  function handleAddToCart(product) {
    setHome([...allProducts, product]);
  }
  function handleDelete(name) {
    const updatedHome = allProducts.filter((element) => element.name !== name);

    const updatedFilteredProducts = filteredProducts.filter(
      (element) => element.name !== name
    );
    setHome(updatedHome);
    setfilteredProducts(updatedFilteredProducts);
  }
  return (
    <>
      <Routes>
        <Route element={<NavbarAndFooterAndContactTooltip />}>
          <Route
            path="/"
            element={<Home handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/women"
            element={<AllWomen handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/men"
            element={<AllMen handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/jewelery"
            element={<AllJewelery handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/electronics"
            element={<AllElectronics handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetails handleAddToCart={handleAddToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart allProducts={allProducts} handleDelete={handleDelete} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
