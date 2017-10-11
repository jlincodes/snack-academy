/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';
stripe.init({
  // test key
  publishableKey: 'pk_live_3dAdhS9inCpxPCD2pXJf8H2y',
});
const theme = {
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'dimgrey',
  primaryForegroundColor: 'red',
  secondaryForegroundColor: 'red',
  accentColor: 'red',
  errorColor: 'dimgrey'
};

class NewCardPage extends Component {
  componentDidMount() {
    // const options = {
    //   smsAutofillDisabled: true,
    //   requiredBillingAddressFields: 'zip',
    //   theme
    // };
    stripe.paymentRequestWithCardForm()
      .then(response => {
        // collecting response
        // sending to backend w/ fetch to store customer
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return(
      <View />
    );
  }
}

export default NewCardPage;
