import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES

import Home from "./Pages/Home";
import About from "./Pages/About";
import AllWomen from "./Pages/AllWomen";
import AllMen from "./Pages/AllMen";
import AllJewelery from "./Pages/AllJewelery";
import AllElectronics from "./Pages/AllElectronics";
import ProductDetails from "./Pages/ProductDetails";
import ContactUs from "./Pages/ContactUs";

// IMPORT COMPONENTS
import NavbarAndFooter from "./Components/NavbarAndFooter";

function App() {
	return (
		<>
			<Routes>
				<Route element={<NavbarAndFooter />}>
					<Route path="/" element={<Home />} />
					<Route path="/women" element={<AllWomen />} />
					<Route path="/men" element={<AllMen />} />
					<Route path="/jewelery" element={<AllJewelery />} />
					<Route path="/electronics" element={<AllElectronics />} />
					<Route
						path="/products/:productId"
						element={<ProductDetails />}
					/>
					<Route path="/contact" element={<ContactUs />}></Route>

					<Route path="/about" element={<About />} />
					{/* <Route path="/contact" element={<About />}/> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
