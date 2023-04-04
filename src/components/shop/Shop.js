import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import styles from "./Shop.module.css"

const Shop = () => {
  // const first10 = fakeData.slice(0, 10);
  const first10 = fakeData;
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const products = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    })
    setCart(products);
  }, []);

  const handleAddProduct = (pd) => {
    const sameProduct = cart.find((cartPd) => cartPd.key === pd.key);
    if (sameProduct) {
      sameProduct.quantity++;
      const others = cart.filter((cartPd) => cartPd.key !== pd.key);
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
    <div className={styles.shop}>
      <div className={styles.productContainer}>
        <div className={styles.products}>
        {products.map((pd) => (
          <Product
            showAddToCart={true}
            key={pd.key}
            product={pd}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
        </div>
      </div>
      <div className={styles.cartContainer}>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
