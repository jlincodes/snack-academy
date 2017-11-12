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

import Order from './Order.js';
import HeaderBanner from './HeaderBanner.js';
import {connect} from 'react-redux';

import {createOrder, receiveConfirmation, clearConfirmation} from '../actions/cart_actions.js';
import {receiveOrderErrors} from '../actions/errors_actions.js';
import { formatOrder } from '../reducers/selectors.js';

class CheckOut extends React.Component {

  constructor(props){
    super(props);
    this.state = { buttonClicked: false };
  }

// make sure to reset back to true
  sendOrder(){
    this.setState({buttonClicked: true});
    let { navigate } = this.props.navigation;
    let order = this.props.formatOrder;
    console.log(order);
    this.props.clearConfirmation();
    this.props.createOrder(order)

    navigate('Confirmation');
  }

  // handleSuccess(res){
  //   this.props.receiveConfirmation(res);
  //   let { navigate } = this.props.navigation;
  //   navigate('Confirmation');
  // }


  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'black'}}>Confirm Order</Text>
        </View>
        <View style={styles.checkOutHead}>
          <Text style={styles.checkOutHeadText}>Item</Text>
          <Text style={styles.checkOutHeadText}>Amount</Text>
        </View>
        <Order />
        <View style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')} disabled={this.state.buttonClicked}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>View Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sendOrder()} disabled={this.state.buttonClicked}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkOutHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30
  },
  checkOutHeadText: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    color: '#555555'
  }
});


const mapStateToProps = (state) => ({
  formatOrder: formatOrder(state.cart, state.user)
});

const mapDispatchToProps = (dispatch) => ({
  createOrder: (order) => dispatch(createOrder(order)),
  clearConfirmation: () => dispatch(clearConfirmation()),
  receiveConfirmation: () => dispatch(receiveConfirmation()),
  receiveOrderErrors: (errors) => dispatch(receiveOrderErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
