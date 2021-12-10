import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) =>  {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51K5DD1DmGKnsp6B2OvYCmBQ2tzWlyJZZTEOO0QtSDGp1IVW483MMrrepVKffFVDVDDQ2vLs162vhfX0l8mYqI84M00t37I5gLD';
 
  const onToken = token => {
      console.log(token);
      alert ('Payment succesful');
  };

  return (
      <StripeCheckout 
      label='Check and Pay'
      name='Fashion Clothing GmbH'
      currency='EUR'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/ciK.svg' 
      description={`The total is €${price}`}
      amount={priceForStripe}
      panelLabel='PAY NOW'
      token={onToken}
      stripeKey={publishablekey}     
      />
  );
};

export default StripeCheckoutButton;