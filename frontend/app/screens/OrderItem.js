import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
import {connect} from 'react-redux';


class OrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let product = this.props.product;

      return (
        <View>
          <Image style={{height: 150, width: '100%' }} source={require('../images/coffee.jpg')}/>
          <Text>{this.props.product.name}</Text>
          <Text>{this.props.product.description}</Text>
          <Text>{this.props.product.price}</Text>
        </View>
      );
    }

  }

  export default OrderItem;
