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
import { clearCart, clearConfirmation } from '../actions/cart_actions.js';

class Confirmation extends React.Component {


  componentWillMount() {

  }

  handleBackToMenu() {
    const { goBack, navigate } = this.props.navigation;
    this.props.clearCart();
    this.props.clearConfirmation();
    navigate('SimpleApp');
  }
  // let orderConfirmed = require('../images/order_confirmed.png');
  // <Image style={{flex: 7, width: 400}} source={orderConfirmed}/>

  render() {
    let confirmationId = this.props.confirmation.id;

    if (confirmationId) {

      return (
        <View style={{flex: 1}}>
          <HeaderBanner style={{flex: 1}}/>
          <View style={{flex: 10, backgroundColor: '#f7f7f7',
            alignItems: 'center'}}>
            <Text style={styles.text}>Your order has been confirmed.</Text>
            <Text style={styles.text}>{`Your order number is: #${confirmationId}`}</Text>
            <Text style={styles.text}>
              Pick Up Instructions: Your order will be ready for pick up during your break at 3:45 PM.
            </Text>
          </View>

          <Container style={
            {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: '#1485CC'}}>
            <TouchableOpacity onPress={() => this.handleBackToMenu()}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
            </TouchableOpacity>
          </Container>
        </View>
      );
    } else {
      return(
        <View />
      )
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#555555',
    margin: 25
  }
});

const mapStateToProps = (state) => ({
  confirmation: state.confirmation
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  clearConfirmation: () => dispatch(clearConfirmation())
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
