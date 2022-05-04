import {
  ADD_FROM_CARD,
  ADD_TO_CART,
  ADD_TO_CART_QTY,
  DELETE_FROM_CART,
  REMOVE_FROM_CARD
} from "./cartActions";

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case ADD_TO_CART_QTY:
      const { id } = action.payload;
      const index = state.findIndex((x) => x.id === id);

      if (index === -1) {
        console.error(`product with id: ${id} not found.`);
        return state;
      }

      const newState = [...state];

      newState[index].qty = newState[index].qty + 1;

      return newState;

    case DELETE_FROM_CART:
      const product = action.payload;
      const indexP = state.findIndex((x) => x === product);

      if (indexP === -1) {
        console.error(`product with id: ${id} not found.`);
        return state;
      }

      const newState2 = [...state];

      newState2[indexP].qty = newState2[indexP].qty - 1;

      if (product.qty === 0) {
        newState2.splice(indexP, 1);
      }

      return newState2;

    case ADD_FROM_CARD:
      const productadd = action.payload;
      const indexPadd = state.findIndex((x) => x === productadd);

      if (indexPadd === -1) {
        return state;
      }

      const newState2add = [...state];
      newState2add[indexPadd].qty = newState2add[indexPadd].qty + 1;

      if (productadd.qty === 0) {
        newState2.splice(indexPadd, 1);
      }
      return newState2add;

    case REMOVE_FROM_CARD:
      const prod = action.payload;
      const ind = state.findIndex((x) => x === prod);

      if (ind === -1) {
        return state;
      }

      const new2 = [...state];

      new2[ind].qty = new2[ind].qty - new2[ind].qty;

      if (prod.qty === 0) {
        new2.splice(ind, 1);
      }

      return new2;

    default:
      return state;
  }
}
