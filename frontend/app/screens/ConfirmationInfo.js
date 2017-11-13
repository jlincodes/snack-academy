import React from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  Animated,
  Image,
  Easing,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';

import HeaderBanner from './HeaderBanner.js';

import { clearCart, clearConfirmation } from '../actions/cart_actions.js';

class ConfirmationInfo extends React.Component {

  constructor(props){
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount(){
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }


  render() {
    const spinIt = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    //eventually make this base on today's date and get last two numbers of cong
    let confirmationId = this.props.confirmationId
    if (confirmationId) {
      return(
        <View style={{flex: 10, backgroundColor: '#f7f7f7', justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={{fontSize: 40}}>Confirmed!</Text>
          <Text style={{fontSize: 30}}>Order Number:</Text>
          <Text style={{fontSize: 60}}>{confirmationId}</Text>
          <Text style={{fontSize: 20}}>
            Pick up at 3:45 PM
          </Text>
        </View>
      )
    } else {
      return(
        <View style={{flex: 10, backgroundColor: '#f7f7f7', alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Image style={{ width: 114, height: 100, transform: [{rotate: spinIt }] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>
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

export default ConfirmationInfo
