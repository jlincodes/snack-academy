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

  // <Image style={{height: 150, width: '100%' }} source={{uri: product.img_url}} />
  // <Text>{product.name}</Text>
  // <Text>{product.description}</Text>
  // <Text>{this.handleUSDConversion(product.price)}</Text>
  render() {
    let product = this.props.product;
    let name = product.name;
    let description = product.description;
    let price = this.handleUSDConversion(product.price);
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10}}>
          <Image
            style={{height: 125, width: 125, marginRight: 15 }}
            source={{uri: product.img_url}} />
          <Text>
            {`${name}\n${description}\n${this.handleUSDConversion(product.price)}`}
          </Text>
        </View>
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
