import React from "react";

import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartItemsCount
} from "../../_store/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <ul className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//now it will not rerender in case of changes unrelated to cartItems
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
