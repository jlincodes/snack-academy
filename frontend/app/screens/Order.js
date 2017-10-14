

import React from 'react';
import { StyleSheet, Text, FlatList, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

import {connect} from 'react-redux';

import OrderItem from './OrderItem.js'

class Order extends React.Component {

  render() {

    //creating array of product objects
    let order = this.props.order

    return (
      <View>
        <FlatList
          data={order}
          renderItem={({item}) => <OrderItem key={item.id} product={item}/>}
        />
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
