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
      let product = this.props.product;
      return (
        <View>
          <View style={styles.cartItem}>
            <Text>{product.name}</Text>
            <Text>{this.handleUSDConversion(product.price)}</Text>
          </View>
          <Button title='Remove' onPress={() => this.props.deleteItemFromCart(product)}/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cartItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: "10 25 15 25"
    }
  });


const mapDispatchToProps = (dispatch) => (
  {deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CartItem);
