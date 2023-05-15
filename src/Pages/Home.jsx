import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import heroBanner from "../Assets/banner.png";

function Home() {
	const [products, setProducts] = useState();
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	if (!products) {
		return <p>Loading...</p>;
	}

	return (
		<div className="page-container">
			<div className="list-content">
				<h1 className="home-title">
					<span className="highlight-color italic">Purrfect</span>
					<span className="italic"> Ugly </span>Shop
				</h1>

				<div className="hero-banner">
					<img
						className="promo"
						src={heroBanner}
						alt="banner-no-promo"
					/>
				</div>

				<div className="page-list-wrapper">
					<div className="cards-wrapper">
						<h2 className="home-subtitle">All Products</h2>
						{products.map((product) => (
							<Link
								key={product.id}
								to={`/products/${product.id}`}
							>
								<div className="card">
									<div className="card-image">
										<img
											src={product.image}
											alt={product.name}
										/>
									</div>
									<div className="card-content">
										<p className="product-name">
											{product.title}
										</p>
										<p className="price">
											{product.price}€
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
