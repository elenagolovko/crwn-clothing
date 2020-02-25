import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../_store/cart/cart.selectors";

// import { toggleCartHidden } from "../../_store/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <ul className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </ul>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        // dispatch(toggleCartHidden);
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//now it will not rerender in case of changes unrelated to cartItems
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
