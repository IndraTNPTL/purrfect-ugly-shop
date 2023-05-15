import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
	const { productId } = useParams();
	const [productDetails, setproductDetails] = useState([]);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.then((response) => setproductDetails(response.data));
	}, [productId]);

	// console.log({ productDetails });

	return (
		<>
			<div className="page-container">
				<div className="single-product-content">
					{/* <h1>{productDetails.name}</h1> */}

					<div className="product-wrapper">
						<div className="image-wrapper">
							<img
								className="product-image"
								src={productDetails.image}
								alt={productDetails.name}
							/>
						</div>

						<div className="product-infos">
							<h2 className="product-title">
								{productDetails.title}
							</h2>
							<p className="price detail-price-product">
								{productDetails.price}€
							</p>
							<h3 className="product-sections-title">
								About this product
							</h3>
							<p className="detail-description-product">
								{productDetails.description}
							</p>
							<div className="add-to-cart">
								<button className="btn-add-to-cart">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
