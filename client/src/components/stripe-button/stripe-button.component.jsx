import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from axios;

const StripeCheckoutButton = ({ price }) =>  {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51K5DD1DmGKnsp6B2OvYCmBQ2tzWlyJZZTEOO0QtSDGp1IVW483MMrrepVKffFVDVDDQ2vLs162vhfX0l8mYqI84M00t37I5gLD';
 
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please be sure of your payment DATA');
    });
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