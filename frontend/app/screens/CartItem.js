import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';

import { deleteItemFromCart } from '../actions/cart_actions.js'

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let product = this.props.product
      return (
        <View>
          <Image style={{height: 150, width: '100%' }} source={require('../images/coffee.jpg')}/>
          <Text>{this.props.product.name}</Text>
          <Text>{this.props.product.description}</Text>
          <Text>{this.props.product.price}</Text>
          <Button title='Remove' onPress={() => this.props.deleteItemFromCart(product)}/>
        </View>
      );
    }

  }


const mapDispatchToProps = (dispatch) => (
  {deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})


export default connect(null, mapDispatchToProps)(CartItem);
