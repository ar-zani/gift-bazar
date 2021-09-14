import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

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

  const [pdName, setPdName] = useState('');
  const [pdPrice, setPdPrice] = useState();
  const [pdImg, setPdImg] = useState('');

  const submitPd = () => {
     

  }

  const handleAddProduct = (pd) => {
    const sameProduct = cart.find((prd) => prd.key === pd.key);
    if (sameProduct) {
      sameProduct.quantity++;
      const others = cart.filter((prd) => prd.key !== pd.key);
      const newCart = [...others, pd];
      setCart(newCart);
    }
    else {
      pd.quantity = 1;
      const newCart = [...cart, pd];
      setCart(newCart);
    }
    addToDatabaseCart(pd.key, pd.quantity);
  };

  return (
    <div className="shop">
      <div className="new-product">
      <form>
          <legend> <h3>Add New Product</h3></legend>
          <label htmlFor="name">Name </label>
          <input name="name" type="text" onChange={(e)=>{
            setPdName(e.target.value)
          }}/>
          <label htmlFor="price">Price </label>
          <input name="price" type="number" onChange={(e)=>{
            setPdPrice(e.target.value)
          }}/>
          <label htmlFor="img">Image Url </label>
          <input name="img" type="text" onChange={(e)=>{
            setPdImg(e.target.value)
          }}/>
          <button style={{width:"80px", margin:"20px auto"}} onClick={submitPd}>Insert</button>
        </form>
      </div>
      <div className="product-container">
        {products.map((pd) => (
          <Product
            showAddToCart={true}
            key={pd.key}
            product={pd}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
