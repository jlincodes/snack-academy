import React from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';

import HeaderBanner from './HeaderBanner.js';

class Cart extends React.Component {

  render() {

    const { goBack, navigate } = this.props.navigation;
    let exampleCart = require('../images/cart.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .5, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'black'}}>Your Cart</Text>
        </View>
        <Image style={{flex: 5, width: 400}} source={exampleCart}/>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Index')}>
            <Text style={{fontSize: 22}}>Back to Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CheckOut')}>
            <Text style={{fontSize: 22}}>Check Out</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

export default Cart;
