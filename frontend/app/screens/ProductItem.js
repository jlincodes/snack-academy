import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';

import { addItemToCart } from '../actions/cart_actions.js'

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  handleUSDConversion(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

  render() {
      let product = this.props.product
      return (
        <View>
          <Image style={{height: 150, width: '100%' }} source={{uri: product.img_url}} />
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>{this.handleUSDConversion(product.price)}</Text>
          <Button title='add' onPress={() => this.props.addItemToCart(product)}/>
        </View>
      );
    }

  }

  //testing
  const mapStateToProps = (state) => ({
    state: state
  });


  const mapDispatchToProps = (dispatch) => {
    console.log('dispatch', dispatch);
    return (
      {
        addItemToCart: (item) => dispatch(addItemToCart(item))
      }
    )
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
