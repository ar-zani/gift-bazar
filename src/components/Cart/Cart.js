import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // console.log(props.cart);
  const price = props.cart.reduce((price, pd) => price+pd.price*pd.quantity,0);
  const quantity= props.cart.reduce((cnt, pd) => cnt + pd.quantity,0);
  return (
    <div>
        <h1>Cart</h1>
        <h4>Order: {quantity}</h4>
        <h4>Total: {price.toFixed(2)}</h4>
        <Link to="/review"><button>Review Order</button></Link>
    </div>
  );
};

export default Cart;