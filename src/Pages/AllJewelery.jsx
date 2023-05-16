import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllJewelery({ handleAddToCart }) {
	const [jeweleries, setJewelery] = useState();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/category/jewelery")
			.then((response) => {
				setJewelery(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!jeweleries) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					<span className="highlight-color italic">Purrfect</span>
					<span className="italic"> Ugly </span>Jewelery
				</h1>

				<div className="cards-wrapper">
					{jeweleries.map((jewelery) => (
						<div key={jewelery.id} className="card">
							<Link to={`/products/${jewelery.id}`}>
								<div className="card-image">
									<img
										id="jewelery-special-img-class"
										src={jewelery.image}
										alt={jewelery.name}
									/>
								</div>
								<div className="card-content">
									<p className="product-name">
										{jewelery.title}
									</p>
									<p className="price">{jewelery.price}€</p>
								</div>
							</Link>
							<div className="add-to-cart">
								<button
									className="btn-add-to-cart"
									onClick={() => handleAddToCart(jewelery)}
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

export default AllJewelery;
