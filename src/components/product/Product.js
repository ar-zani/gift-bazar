import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {img, name, price, key, quantity} = props.product;
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <h5>Quantity: {quantity}</h5>
      <h5>{price}</h5>
      {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)}>
        add to cart
      </button>}
    </div>
  );
};

export default Product;
