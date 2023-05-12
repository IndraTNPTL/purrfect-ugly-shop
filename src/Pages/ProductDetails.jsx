import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const [productDetails, setproductDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setproductDetails(response.data));
  }, [productId]);

  console.log({ productDetails });

  return (
    <>
      <div className="wrapper">
        <div className="ImageContainer">
          <img
            className="Image"
            src={productDetails.image}
            alt={productDetails.id}
            style={{ width: "300px" }}
          />
        </div>
        <div className="InfoContainer">
          <h2 className="title">{productDetails.title}</h2>
          <p className="rate">{productDetails.rate}</p>
          <p className="price">{productDetails.price}€</p>
          <p className="description">{productDetails.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
