
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

import {initializeUser, verifyUser} from '../actions/user_actions.js';
import NewCardPage from '../stripe_page.js';
import StripeLogoPage from './StripeLogoPage.js'

import {
  AccessToken
} from 'react-native-fbsdk';




class Splash extends React.Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
    this.initUser = this.initUser.bind(this)
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

  initUser(token) {
    const { goBack, navigate } = this.props.navigation;
    console.log('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token);

    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      const user = {email: json.email, name: json.name, fbId: json.id}
      this.props.initializeUser(user)
      navigate('StripeLogoPage')
    })
    .catch((error) => {
      console.log(error);
      // reject('ERROR GETTING DATA FROM FACEBOOK')
    })

  }

  componentDidMount() {
    this.spin()
    AccessToken.getCurrentAccessToken().then(token => {
      if(!token) {
        setTimeout(() => this.props.navigation.navigate('Signup'), 2000)
      } else {

        const fbId = parseInt(token.userID)
        const userObject = {fbId: fbId}
        this.props.verifyUser(userObject).then(() => {
          setTimeout(()=>  this.props.navigation.navigate('SimpleApp'), 2000)
        }, () => this.initUser(token.accessToken))
      }
      // }).catch(() => setTimeout(() => this.props.navigation.navigate('Signup'), 2000))
    })
  }


  // componentDidMount() {
  //   this.spin()
  //   AccessToken.getCurrentAccessToken().then(token => {
  //     if (token) {
  //       console.log(token);
  //       const fbId = parseInt(token.userID)
  //       const userObject = {fbId: fbId}
  //       console.log(userObject);
  //       this.props.verifyUser(userObject)
  //       // firebase.database().ref(`/users/${token.userID}`)
  //       //         .on('value', (snap) => this.props.receiveCurrentUser(snap.val()));
  //       setTimeout(()=>  this.props.navigation.navigate('SimpleApp'), 2000)
  //     } else {
  //       setTimeout(()=>  this.props.navigation.navigate('Signup'), 2000)
  //     }
  //   });
  // }





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

const mapStateToProps = (state) => ({
  userName: state.user.name
});

const mapDispatchToProps = (dispatch) => ({
  verifyUser: (facebookID) => dispatch(verifyUser(facebookID)),
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
