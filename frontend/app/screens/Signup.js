
import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';
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
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#C00A0A'}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: 4, justifyContent: 'space-around', width: '80%'}}>
          <TextInput
            style={{borderColor: 'gray', height: '20%', fontSize: 26, borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            style={{borderColor: 'gray',  height: '20%', fontSize: 26, borderWidth: 1}}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View style={{flex: 4}}>
          <Text>hello this is an explanation of our app and how to sign up</Text>
        </View>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'blue'}} onPress={() => this.handleSubmit()}>
          <Text style={{color: '#FFFFFF', fontSize: 18,}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initializeUser: (user) => dispatch(initializeUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
