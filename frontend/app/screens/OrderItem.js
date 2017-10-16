import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';


class OrderItem extends React.Component {
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
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
            <Text>{product.name}</Text>
            <Text>{this.handleUSDConversion(product.price)}</Text>
          </View>
        </View>
      );
    }

  }

  export default OrderItem;
