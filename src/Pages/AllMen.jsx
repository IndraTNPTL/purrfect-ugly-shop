import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllMen({ handleAddToCart }) {
	const [men, setMen] = useState();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/category/men's%20clothing")
			.then((response) => {
				setMen(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!men) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					<span className="highlight-color italic">Purrfect</span>
					<span className="italic"> Ugly </span>Men Clothes
				</h1>

				<div className="cards-wrapper">
					{men.map((man) => (
						<div key={man.id} className="card">
							<Link to={`/products/${man.id}`}>
								<div className="card-image">
									<img src={man.image} alt={man.name} />
								</div>
								<div className="card-content">
									<p className="product-name">{man.title}</p>
									<p className="price">{man.price}€</p>
								</div>
							</Link>
							<div className="add-to-cart">
								<button
									className="btn-add-to-cart"
									onClick={() => handleAddToCart(man)}
								>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default AllMen;
