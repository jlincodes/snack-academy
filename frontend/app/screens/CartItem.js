import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';

import { deleteItemFromCart } from '../actions/cart_actions.js';

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
        <View style={{ flex: 2, borderWidth: 2, borderColor: '#d6d7da'}}>
          <View style={styles.cartItem}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{product.name}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.handleUSDConversion(product.price)}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor: '#C00A0A', height: '60%', width: '100%', flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.deleteItemFromCart(product)}>
            <Text style={{color: 'white', fontSize: 20, height: '90%'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cartItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      marginLeft: 30,
      marginRight: 30
    }
  });


const mapDispatchToProps = (dispatch) => (
  {deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item))
});


export default connect(null, mapDispatchToProps)(CartItem);
