

import React from 'react';
import { StyleSheet, Text, FlatList, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

import {connect} from 'react-redux';

import OrderItem from './OrderItem.js';

class Order extends React.Component {

  handleUSDConversion(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

  calculateTotal(cart) {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  render() {

    //creating array of product objects
    let order = this.props.order;
    let total = this.handleUSDConversion(this.calculateTotal(order));

    return (
      <View style={{flex: 8}}>
        <FlatList
          style={{flex: 6}}
          data={order}
          renderItem={({item}) => <OrderItem product={item}/>}
          keyExtractor={(item, index) => index}
        />
      <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Total Amount:</Text>
          <Text>{total}</Text>
        </View>
      </View>
    );
  }
}

// <OrderItem key={product.id} product={item.price}/>

const mapStateToProps = (state) => ({
  order: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProducts: () => dispatch(requestAllProducts())
});



export default connect(mapStateToProps, mapDispatchToProps)(Order);
