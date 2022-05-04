export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_QTY = "ADD_TO_CART_QTY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const ADD_FROM_CARD = "ADD_FROM_CARD";
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const addToCartQty = (id) => ({
  type: ADD_TO_CART_QTY,
  payload: { id }
});

export const deleteFromCart = (product) => ({
  type: DELETE_FROM_CART,
  payload: product
});

export const addFromCart = (product) => ({
  type: ADD_FROM_CARD,
  payload: product
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CARD,
  payload: product
});
