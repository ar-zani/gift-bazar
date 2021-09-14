import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Grocery Management System</h1>
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
      </nav>
    </div>
  );
};

export default Header;
