
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
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { navigate } = this.props.navigation;
    let user = this.state;
    console.log(user);
    this.props.initializeUser(user);
    navigate('NewCardPage');
  }


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#f7f7f7'}}>
          <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn.bind(this)}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    width: '80%',
    height: 45,
    fontSize: 20,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 3,
    margin: 10
  },
  signUpBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1485CC'}
});

const mapDispatchToProps = (dispatch) => ({
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
