import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = "pk_test_niGkJOfWKpyU39fyWouXgKP200jU77fDKx";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(err => {
        console.log("Payment error ", JSON.parse(err));
        alert(
          "There was an issue with your payment. Please make sure to use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
