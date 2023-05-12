import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllElectonics() {
  const [electronics, setElectonics] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setElectonics(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!electronics) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {electronics.map((electronic) => (
          <div key={electronic.title}>
            <Link to={`/products/${electronic.id}`}>
              <div className="electronic-card">
                <img
                  src={electronic.image}
                  alt="Image"
                  style={{ width: "100px" }}
                />
                <div>
                  <p>{electronic.title}</p>
                  <p>{electronic.price}€</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllElectonics;
