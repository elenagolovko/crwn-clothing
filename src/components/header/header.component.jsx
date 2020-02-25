import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/_icons/crown.svg";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../_store/cart/cart.selectors";
import { selectCurrentUser } from "../../_store/user/user.selectors";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </nav>
    {hidden ? null : <CartDropdown />}
  </header>
);

//allows us to access the state the state being reducer
//instead of passing state again and again using createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
