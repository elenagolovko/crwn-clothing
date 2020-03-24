import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../_store/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmedPassword } = userData;

    if (password !== confirmedPassword) {
      console.error("Psswords do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const { displayName, email, password, confirmedPassword } = userData;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email or password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: data => dispatch(signUpStart(data))
});

export default connect(null, mapDispatchToProps)(SignUp);
