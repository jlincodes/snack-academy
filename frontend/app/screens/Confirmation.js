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
import ConfirmationInfo from './ConfirmationInfo.js'
import { clearCart } from '../actions/cart_actions.js';

class Confirmation extends React.Component {


  componentWillMount() {

  }

  handleBackToMenu() {
    const { goBack, navigate } = this.props.navigation;
    this.props.clearCart();
    navigate('SimpleApp');
  }

  render() {
    let confirmationId = this.props.confirmation.id;


    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>

        <ConfirmationInfo style={{flex: 10}}confirmationId={confirmationId} />
        <View style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => this.handleBackToMenu()}>
            <Text style={{color: '#FFFFFF', fontSize: 24}}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
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
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
