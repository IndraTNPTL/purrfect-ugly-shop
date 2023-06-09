import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllWomen({ handleAddToCart }) {
	const [women, setWomen] = useState();
	useEffect(() => {
		axios
			.get(
				"https://fakestoreapi.com/products/category/women's%20clothing"
			)
			.then((response) => {
				setWomen(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!women) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1>
					<span className="highlight-color italic">Purrfect</span>
					<span className="italic"> Ugly </span>Women Clothes
				</h1>

				<div className="cards-wrapper">
					{women.map((woman) => (
						<div key={woman.id} className="card">
							<Link to={`/products/${woman.id}`}>
								<div className="card-image">
									<img src={woman.image} alt={woman.name} />
								</div>
								<div className="card-content">
									<p className="product-name">
										{woman.title}
									</p>
									<p className="price">{woman.price}€</p>
								</div>
							</Link>
							<div className="add-to-cart">
								<button
									className="btn-add-to-cart"
									onClick={() => handleAddToCart(woman)}
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

export default AllWomen;
