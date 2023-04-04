import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    logOut()
      .then(() => { })
      .catch(err => { console.error(err); })
  }
  return (
    <div className="header">
      <div className="flex justify-between items-center px-7">
        <h1>Gift Bazar</h1>
        {
          user && <span className="text-xl font-semibold">Welcome {user?.email}</span>
        }
      </div>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        {
          user ?
            <button onClick={handleSubmit} className="btn btn-sm bg-success">Logout</button>
            :
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>

        }
      </nav>
    </div>
  );
};

export default Header;
