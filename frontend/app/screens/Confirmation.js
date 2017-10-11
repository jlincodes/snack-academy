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

class Confirmation extends React.Component {

  render() {
    const { goBack, navigate } = this.props.navigation;
    let orderConfirmed = require('../images/order_confirmed.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 1, backgroundColor: '#f7f7f7', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Order Confirmed</Text>
        </View>
        <Image style={{flex: 7, width: 400}} source={orderConfirmed}/>
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Index')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

export default Confirmation;
