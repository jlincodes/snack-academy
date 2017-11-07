




import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  AppRegistry,
  View,
  Button,
  Image
} from 'react-native';
import HeaderBanner from './HeaderBanner.js';
import {initializeUser} from '../actions/user_actions.js';



import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

import * as firebase from 'firebase';

class Signup extends React.Component {

  constructor(props){
    super(props)
    this.state = {email: ''}
    this.initUser = this.initUser.bind(this)
    // this.setState = this.setState.bind(this)
  }

  initUser(token) {

    let user = fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      this.setState({email: json.email, name: json.name, fbID: json.id})
      console.log('we need this to work', this.state);
      this.props.initializeUser({user: {this.state}})
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })

  }



  render() {

    return (
      <View>
        <LoginButton
          readPermissions={["public_profile", "email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    // console.log(data);
                    // const credential = firebase.auth.FacebookAuthProvider
                    //                            .credential(data.accessToken);
                    // console.log(credential);
                    const token = data.accessToken;
                    this.initUser(token)


                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
