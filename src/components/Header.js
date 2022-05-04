import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { reducer } from "../utils/functions";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const qtis = cartItems.map((x) => x.qty);
  const cartItemsTotal = qtis.reduce(reducer, 0);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div>&copy; Jayesh Shimpi</div>
      <div className="cart">
        <Link to="/cart">Cart ({cartItemsTotal})</Link>
      </div>
    </div>
  );
};
