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
import Order from './Order.js'
import HeaderBanner from './HeaderBanner.js';

class CheckOut extends React.Component {

  render() {
    const { goBack, navigate } = this.props.navigation;
    let checkOutImage = require('../images/confirmation_screen.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 1, backgroundColor: '#f7f7f7', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Confirm Order</Text>
        </View>
        <Order style={{flex: 8}} />
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>View Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Confirmation')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Confirm Order</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

export default CheckOut;
