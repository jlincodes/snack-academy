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
        <View style={styles.orderItem}>
          <Text style={{fontWeight: 'bold'}}>{product.name}</Text>
          <Text style={{fontWeight: 'bold'}}>{this.handleUSDConversion(product.price)}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    orderItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      marginLeft: 30,
      marginRight: 30
    }
  });

  export default OrderItem;
