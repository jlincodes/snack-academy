
import React from 'react'
import {
  Text,
  View,
  Animated,
  Image,
  Easing,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import {
  AccessToken
} from 'react-native-fbsdk';

import { verifyUser } from '../actions/user_actions.js'


class Splash extends React.Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
    AccessToken.getCurrentAccessToken().then(token => {
      if (token) {
        console.log(token);
        const fbId = parseInt(token.userID)
        const userObject = {fbId: fbId}
        console.log(userObject);
        this.props.verifyUser(userObject)
        // firebase.database().ref(`/users/${token.userID}`)
        //         .on('value', (snap) => this.props.receiveCurrentUser(snap.val()));
        setTimeout(()=>  this.props.navigation.navigate('SimpleApp'), 2000)
      } else {
        setTimeout(()=>  this.props.navigation.navigate('Signup'), 2000)
      }
    });
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


  render () {
    const spinIt = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Animated.Image style={{ width: 280, height: 280, transform: [{rotate: spinIt }] }}
        resizeMode="cover" source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510647163/Screen_Shot_2017-11-14_at_12.11.24_AM_mk0m86.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C00A0A'
  }
})


const mapDispatchToProps = (dispatch) => ({
  verifyUser: (facebookID) => dispatch(verifyUser(facebookID))
});

export default connect(null, mapDispatchToProps)(Splash);
