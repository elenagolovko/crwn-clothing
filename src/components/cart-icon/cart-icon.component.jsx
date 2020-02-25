import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../_store/cart/cart.actions";

import { selectCartItemsCount } from "../../_store/cart/cart.selectors";

import { ReactComponent as ShoppingBag } from "../../assets/_icons/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemsCount = 0 }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//selector! - NOT GOOD FOR PERFORMANCE BECAUSE TRIGGERED ON EACH STIRE CHANGE
const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
