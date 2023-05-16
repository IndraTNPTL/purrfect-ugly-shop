import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllMen() {
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
						<Link key={man.id} to={`/products/${man.id}`}>
							<div className="card">
								<div className="card-image">
									<img src={man.image} alt={man.name} />
								</div>
								<div className="card-content">
									<p className="product-name">{man.title}</p>
									<p className="price">{man.price}€</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default AllMen;
