import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllMen.css";

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

  if (!men) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {men.map((man) => (
          <div key={man.title}>
            <Link to={`/products/${man.id}`}>
              <div className="man-image">
                <img src={man.image} alt="Image" style={{ width: "300px" }} />
              </div>
              <div className="man-container">
                <p className="man-title">{man.title}</p>
                <p className="man-price">{man.price}€</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllMen;
