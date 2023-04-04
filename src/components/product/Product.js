import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = (props) => {
  const { img, name, price, key, quantity } = props.product;
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={img} alt={name} />
      <div className={styles.productDetails}>
        <h4>{name}</h4>
        {quantity && <h5>Quantity: {quantity}</h5>}
        <h5>{price} $</h5>
        {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)}>
          add to cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
