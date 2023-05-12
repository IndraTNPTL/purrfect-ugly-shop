import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES

import Home from "./Pages/Home";
import About from "./Pages/About";

// IMPORT COMPONENTS
import NavbarAndFooter from "./Components/NavbarAndFooter";

function App() {
	return (
		<>
			<Routes>
				<Route element={<NavbarAndFooter />}>
					<Route path="/" element={<Home />}></Route>
					{/* <Route path="/women" element={<About />}></Route>
					<Route path="/men" element={<About />}></Route>
					<Route path="/jewelery" element={<About />}></Route>
					<Route path="/electronics" element={<About />}></Route> */}
					<Route path="/about" element={<About />}></Route>
					{/* <Route path="/contact" element={<About />}></Route> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
