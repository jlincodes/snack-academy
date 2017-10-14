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

import {createOrder} from '../actions/cart_actions.js'
import { formatOrder } from '../reducers/selectors.js'

class CheckOut extends React.Component {

  sendOrder(){
    let order = this.props.formatOrder;
    this.props.createOrder(order)
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    let checkOutImage = require('../images/confirmation_screen.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 1, backgroundColor: '#f7f7f7', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Confirm Order</Text>
        </View>
        <Order />
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>View Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sendOrder()}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Confirm Order</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  formatOrder: formatOrder(state.cart, state.user)
});

const mapDispatchToProps = (dispatch) => ({
  createOrder: (order) => dispatch(createOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
