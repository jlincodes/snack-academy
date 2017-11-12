import React from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  Animated,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import HeaderBanner from './HeaderBanner.js';

import { clearCart, clearConfirmation } from '../actions/cart_actions.js';

class ConfirmationInfo extends React.Component {

  constructor(props){
    super(props)
    this.springValue = new Animated.Value(0.3)
  }

  render() {
    let confirmationId = this.props.confirmationId
    if (confirmationId) {
      return(
        <View style={{flex: 10, backgroundColor: '#f7f7f7', alignItems: 'center'}}>
          <Text style={styles.text}>Your order has been confirmed.</Text>
          <Text style={styles.text}>{`Your order number is: #${confirmationId}`}</Text>
          <Text style={styles.text}>
          Pick Up Instructions: Your order will be ready for pick up during your break at 3:45 PM.
          </Text>
        </View>
      )
    } else {
      return(
        <View style={{flex: 10, backgroundColor: '#f7f7f7', alignItems: 'center'}}>
          <Text>Hello!</Text>
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#555555',
    margin: 25
  }
});

export default ConfirmationInfo
