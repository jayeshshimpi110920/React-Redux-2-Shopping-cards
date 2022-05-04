import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCartQty } from "../redux/cart/cartActions";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (e) => {
    e.preventDefault();

    const index = cartItems.findIndex((item) => item.id === product.id);

    console.log(cartItems);
    console.log(index);

    if (index === -1) {
      dispatch(addToCart(product));
    } else {
      dispatch(addToCartQty(product.id));
    }
  };

  return (
    <div className="product">
      <div className="title">{product.title}</div>
      <div>
        <img src={product.link} width="150px" height="150px"></img>
      </div>
      <div className="price">{product.price} Rs</div>
      <div className="add-to-cart">
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
};
