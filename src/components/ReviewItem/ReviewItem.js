import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
  const {name, quantity, key, price} = props.product;
  return (
    <div className="review-item">
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p><small>BDT {price}</small></p>
      <button onClick={()=>props.removeProduct(key)}>Remove</button>
    </div>
  );
};

export default ReviewItem;