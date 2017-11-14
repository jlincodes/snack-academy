

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
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <OrderItem style={styles.text} product={item}/>}
          keyExtractor={(item, index) => index}
        />
      <View style={styles.orderTotal}>
          <Text style={styles.totalText}>Total Amount:</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  orderTotal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40
  },
  totalText: {
    fontSize: 30,
    color: '#333333',
    fontWeight: 'bold',
    flex: 1,
  },
  total: {
    fontSize: 30,
    color: '#333333',
    fontWeight: 'bold',
    flex: 2
  },
  text: {
    fontSize: 16,
    color: '#555555'
  }
});

const mapStateToProps = (state) => ({
  order: state.cart
});
export default connect(mapStateToProps, null)(Order);
