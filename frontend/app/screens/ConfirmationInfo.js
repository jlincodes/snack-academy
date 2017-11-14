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
        toValue: 2,
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
        <View style={{flex: 10, backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center'}}>
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
        <View style={{flex: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Animated.Image style={{ width: 200, height: 200, transform: [{rotate: spinIt }] }}
          resizeMode="cover" source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510631234/Screen_Shot_2017-11-13_at_7.46.06_PM_ymjyr9.png'}}/>
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
