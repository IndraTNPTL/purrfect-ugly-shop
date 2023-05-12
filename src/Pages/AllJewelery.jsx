import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllJewelery() {
  const [jeweleries, setJewelery] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setJewelery(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!jeweleries) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {jeweleries.map((jewelery) => (
          <div key={jewelery.title}>
            <Link to={`/products/${jewelery.id}`}>
              <div className="jewelery-card">
                <img
                  src={jewelery.image}
                  alt="Image"
                  style={{ width: "100px" }}
                />
                <div>
                  <p>{jewelery.title}</p>
                  <p>{jewelery.price}€</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllJewelery;
