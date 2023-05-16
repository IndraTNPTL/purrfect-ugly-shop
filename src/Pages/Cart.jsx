import React from "react";

function Cart({ cartItems, handleDelete }) {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>Cart</h1>

        <table className="cart">
          <thead>
            <tr>
              <th>Product</th>
              <th> Name</th>
              <th>Unit Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
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

                <div className="action">
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item.title)}
                  >
                    {""}Delete{""}
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
