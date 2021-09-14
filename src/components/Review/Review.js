import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = productKey => {
    const newCart = cart.filter(pd=> pd.key !==productKey)
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const products = productKeys.map(key => {
      const product = fakeData.find(pd=> pd.key===key);
      product.quantity = savedCart[key];
      return product;
    })
    setCart(products);
  },[]);
  return (
    <div className="shop">
      <div className="product-container" style={{textAlign:"center", margin:"0 auto"}}>
      {
        cart.map(pd=> <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
      }
      </div>
      <div className="cart-container" style={{textAlign:"center", margin:"0 auto"}}>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;