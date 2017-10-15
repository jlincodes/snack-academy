
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
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder="First and Last Name"
            underlineColorAndroid="#f7f7f7"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            keyboardType='email-address'
            placeholder="Email Address"
            underlineColorAndroid="#f7f7f7"
          />
        <Text>
          {`Enter your full name and email address. \n
            Then, hit 'Sign Up' below.`}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => this.handleSubmit()}>
            <Text style={{color: '#FFFFFF', fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
