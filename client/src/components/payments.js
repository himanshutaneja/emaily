import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../features/authSlice";

const Payments = () => {
  const dispatch = useDispatch();
  const handleStripeToken = (token) => {
    dispatch(handleToken(token));
  };

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 emails"
      token={handleStripeToken}
      amount={500}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
