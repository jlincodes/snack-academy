




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
import NewCardPage from '../stripe_page.js';
import StripeLogoPage from './StripeLogoPage.js'

import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

class Signup extends React.Component {

  constructor(props){
    super(props)
    this.initUser = this.initUser.bind(this)
  }

  initUser(token) {
    const { goBack, navigate } = this.props.navigation;

    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      const user = {email: json.email, name: json.name, fbId: json.id}
      this.props.initializeUser(user)
      navigate('StripeLogoPage')
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })

  }


//resize mode contain is very useful
  render() {

    return (
      <View style={{flex: 1, backgroundColor: '#C00A0A' }}>
        <View style={{flex: 1.6}} />
        <View style={{flex: 1.3, backgroundColor: '#C00A0A', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: '100%', height: '100%', margin: 20}} resizeMode='contain' source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510652505/Screen_Shot_2017-11-14_at_1.40.59_AM_gbt9wu.png'}} />
        </View>
        <View style={{flex:2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
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
                      const token = data.accessToken;
                      this.initUser(token)
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
        </View>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
