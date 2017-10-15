import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

export default class InitialScreen extends React.Component {

  constructor() {
    super();
    this.state = {token: null, isLoaded: false};
  }

  componentDidMount() {
    AsyncStorage.getItem('@snackOverflowAuthKey:key').then( (token) => {
      this.setState({token: token, isLoaded: true});
    });
  }

  componentWillUpdate(){
    const { navigate } = this.props.navigate;
    if (this.state.token) {
      // send token to backend to get user info
      navigate('SimpleApp');
    } else {
      navigate('Signup');
    }
  }

  render(){
    return(
      <ActivityIndicator />
    );
  }

}
