import React from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';

import HeaderBanner from './HeaderBanner.js';
import CartItem from './CartItem.js'

class Cart extends React.Component {
  render() {
    let cart = this.props.cart;
    const { goBack, navigate } = this.props.navigation;
    let exampleCart = require('../images/cart.png');
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'black'}}>Your Cart</Text>
        </View>
        <View style={{flex: 8}}>
          <FlatList
            data={cart}
            renderItem={({item}) => <CartItem key={item.id} product={item}/>}
          />
        </View>
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Index')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CheckOut')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Check Out</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});


export default connect(mapStateToProps, null)(Cart);
