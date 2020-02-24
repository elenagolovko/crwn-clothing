import CartActionsTypes from "./cart.actions.types";

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item
});
