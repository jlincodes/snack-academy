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
import Order from './Order.js';
import HeaderBanner from './HeaderBanner.js';
import {connect} from 'react-redux';

import {createOrder, receiveConfirmation} from '../actions/cart_actions.js'
import {receiveOrderErrors} from '../actions/errors_actions.js'
import { formatOrder } from '../reducers/selectors.js'

class CheckOut extends React.Component {

  sendOrder(){
    let order = this.props.formatOrder;
    console.log(order);
    this.props.createOrder(order).then(resp => this.handleSuccess(resp)), errors => this.props.receiveOrderErrors(errors)
  }

  handleSuccess(res){
    this.props.receiveConfirmation(resp);
    const { navigate } = this.props.navigation;
    navigate('Confirmation');
  }


  render() {
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
          <TouchableOpacity onPress={() => this.sendOrder()}>
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
  createOrder: (order) => dispatch(createOrder(order)),
  receiveConfirmation: () => dispatch(receiveConfirmation()),
  receiveOrderErrors: (errors) => dispatch(receiveOrderErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
