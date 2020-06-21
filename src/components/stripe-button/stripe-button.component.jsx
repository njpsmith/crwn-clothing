import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GwDgVGHw0Uk7rB8tecsF42Wo9xM6uiENHgaMaxcQXGv9QcncON9tC8r1haVP0JhgFJtMVUVsTx4tDSfLOWuvI4z007wAnhKr5';

  const onToken = (token) => {
    console.log('token', token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
