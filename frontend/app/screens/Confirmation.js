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
import { connect } from 'react-redux';

import HeaderBanner from './HeaderBanner.js';
import { clearCart } from '../actions/cart_actions.js';

class Confirmation extends React.Component {

  componentWillMount(){
    this.props.clearCart();
  }

  // let orderConfirmed = require('../images/order_confirmed.png');
  // <Image style={{flex: 7, width: 400}} source={orderConfirmed}/>

  render() {
    const { goBack, navigate } = this.props.navigation;
    let confirmationId = this.props.confirmation.id;

    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Your order has been confirmed.</Text>
          <Text style={styles.text}>{`Your order number is: #${confirmationId}`}</Text>
          <Text style={styles.text}>{
              `\nPick Up Instructions:
              \nYour order will be ready for pick up during your break
              at 3:45 PM.`
            }
          </Text>

        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('SimpleApp')}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 10,
    backgroundColor: '#f7f7f7',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#444444'
  }
});

const mapStateToProps = (state) => ({
  confirmation: state.confirmation
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
