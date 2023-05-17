import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// IMPORT PAGES

import Home from "./Pages/Home";
import About from "./Pages/About";
import AllWomen from "./Pages/AllWomen";
import AllMen from "./Pages/AllMen";
import AllJewelery from "./Pages/AllJewelery";
import AllElectronics from "./Pages/AllElectronics";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import useCart from "./Components/useCart";

// IMPORT COMPONENTS
import NavbarAndFooterAndContactTooltip from "./Components/NavbarAndFooterAndContactTooltip";

function App() {
	// const [allProducts, setAllProduct] = useState([]);
	const [allProducts, setAllProduct] = useCart();
	const [filteredProducts, setfilteredProducts] = useState(allProducts);
	const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
	const [cartItem, setCartItem] = useState(cartItems);

	function handleAddToCart(product) {
		const existingProduct = cartItem.find((item) => item.id === product.id);

		alert("Item added to your cart!");

		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			product.quantity = 1;
			setCartItem([...cartItem, product]);
		}
		localStorage.setItem("cart", JSON.stringify(cartItem));
	}

	function handleDelete(id) {
		const updatedCartItem = cartItem.filter((item) => item.id !== id);
		setCartItem(updatedCartItem);
		localStorage.setItem("cart", JSON.stringify(updatedCartItem));
	}

	function updateSubtotal(item) {
		const subtotal = item.price * item.quantity;
		item.subtotal = subtotal;
		const updatedAllProduct = allProducts.map((product) =>
			product.id === item.id ? item : product
		);
		setAllProduct(updatedAllProduct);
		localStorage.setItem("cart", JSON.stringify(updatedAllProduct));
	}

	function handleEmptyCart() {
		localStorage.removeItem("cart");
		setCartItem([]);
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
						element={
							<AllJewelery handleAddToCart={handleAddToCart} />
						}
					/>
					<Route
						path="/electronics"
						element={
							<AllElectronics handleAddToCart={handleAddToCart} />
						}
					/>
					<Route
						path="/products/:productId"
						element={
							<ProductDetails handleAddToCart={handleAddToCart} />
						}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/cart"
						element={
							<Cart
								// cartItems={cartItems}
								cartItems={cartItem}
								handleDelete={handleDelete}
								updateSubtotal={updateSubtotal}
								handleEmptyCart={handleEmptyCart}
							/>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
