import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';

import { deleteItemFromCart } from '../actions/cart_actions.js'

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUSDConversion(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

  render() {
      let product = this.props.product
      return (
        <View>
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>{this.handleUSDConversion(product.price)}</Text>
          <Button title='Remove' onPress={() => this.props.deleteItemFromCart(product)}/>
        </View>
      );
    }

  }


const mapDispatchToProps = (dispatch) => (
  {deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CartItem);
