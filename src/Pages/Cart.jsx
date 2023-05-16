import React from "react";

function Cart({ allProducts, handleDelete }) {
  return (
    <div>
      <h1>Cart</h1>

      <table className="cart">
        <thead>
          <tr>
            <th>Product</th>
            <th> Name</th>
            <th>Unit Price</th>
            {/* <th>Shop Link</th> */}

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((item) => (
            <tr key={item.id} className="product">
              <td className="img">
                <span>
                  <img src={item.image}></img>
                </span>
              </td>
              <td className="name">
                <span>{item.title}</span>
              </td>
              <td className="price">
                <span>{item.price}€</span>
              </td>
              {/* <td className="shop-link">
                <a
                  href={item.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ({item.product_link})
                </a>
              </td> */}

              <div className="action">
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(item.name)}
                >
                  {""}Delete{""}
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
