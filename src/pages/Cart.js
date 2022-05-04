import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  addFromCart,
  removeFromCart
} from "../redux/cart/cartActions";
import { reducer } from "../utils/functions";
import "./stylecard.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sumPrices = cartItems.map((x) => x.price * x.qty);
  const total = sumPrices.reduce(reducer, 0);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Adjust Qty</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <img src={item.link} width="100px"></img>
                </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteFromCart(item));
                    }}
                  >
                    --
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addFromCart(item));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeFromCart(item));
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {cartItems.length === 0 ? (
            <tr>
              <td>No products in cart</td>
            </tr>
          ) : (
            <>
              <tr>
                <th>Total</th>
                <td>{total}</td>
              </tr>
            </>
          )}
        </tfoot>
      </table>
      <div>
        You Need to pay {total} Rs...Check here to checkOut Option and Proceed
        with payment page{" "}
      </div>
      <button>Payment Page</button>
    </>
  );
}
