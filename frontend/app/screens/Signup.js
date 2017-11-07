




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
// import {initializeUser} from '../actions/user_actions.js';



import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

import * as firebase from 'firebase';

class Signup extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    this.initializeUser = this.initializeUser.bind(this)
  }

  initializeUser(token) {
    let user = {}
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // // Some user object has been set up somewhere, build that user here
      // // console.log(json);
      // this.setState({name: json.name})
      this.setState({id: json.id})
      this.setState({email: json.email})
      // // user.user_friends = json.friends
      user.email = json.email
      // // user.username = json.name
      // // user.loading = false
      // // user.loggedIn = true
      // user.avatar = setAvatar(json.id)

    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
    console.log(this.state);
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
                    console.log(data);

                    const token = data.accessToken;
                    let user2 = this.initializeUser

                    console.log('below');
                    console.log(this.state);

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


//
// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '', email: '' };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit() {
//     const { navigate } = this.props.navigation;
//     let user = this.state;
//     console.log(user);
//     this.props.initializeUser(user);
//     navigate('NewCardPage');
//   }
//
//
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#f7f7f7'}}>
//         <HeaderBanner style={{flex: 1}}/>
//         <View style={{flex: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={(name) => this.setState({name})}
//             value={this.state.name}
//             placeholder="First and Last Name"
//             underlineColorAndroid="#f7f7f7"
//           />
//           <TextInput
//             style={styles.textInput}
//             onChangeText={(email) => this.setState({email})}
//             value={this.state.email}
//             keyboardType='email-address'
//             placeholder="Email Address"
//             underlineColorAndroid="#f7f7f7"
//           />
//         <Text>
//           {`Enter your full name and email address. \n
//             Then, hit 'Sign Up' below.`}
//           </Text>
//         </View>
//         <View style={{flex: 1}}>
//           <TouchableOpacity
//             style={styles.signUpBtn}
//             onPress={() => this.handleSubmit()}>
//             <Text style={{color: '#FFFFFF', fontSize: 20 }}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   textInput: {
//     borderColor: 'gray',
//     width: '80%',
//     height: 45,
//     fontSize: 20,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderRadius: 3,
//     margin: 10
//   },
//   signUpBtn: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1485CC'}
// });
//
const mapDispatchToProps = (dispatch) => ({
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
