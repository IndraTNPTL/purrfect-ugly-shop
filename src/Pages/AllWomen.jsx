import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllWomen() {
  const [women, setWomen] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => {
        setWomen(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!women) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {women.map((woman) => (
          <div key={woman.title}>
            <Link to={`/products/${woman.id}`}>
              <div className="woman-card">
                <img src={woman.image} alt="Image" style={{ width: "100px" }} />
              </div>
              <div>
                <p>{woman.title}</p>
                <p>{woman.price}€</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllWomen;
