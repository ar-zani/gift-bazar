import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // console.log(props.cart);
  const price = props.cart.reduce((price, pd) => price+pd.price*pd.quantity,0);
  return (
    <>
        <h1>Cart</h1>
        <h4>Order: {props.cart.length}</h4>
        <h4>Total: {price.toFixed(2)}</h4>
        <Link to="/review"><button>Review Order</button></Link>
    </>
  );
};

export default Cart;