import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

class InitialScreen extends React.Component {

  constructor() {
    super();
    this.state = {hasToken: false, isLoaded: false};
  }

  componentDidMount() {
    AsyncStorage.getItem('@snackOverflowAuthKey:key').then( (token) => {
      this.setState({hasToken: token !== null, isLoaded: true});
    });
  }

  componentWillUpdate(){
    const { navigate } = this.props.navigate;
    if (this.state.hasToken) {
      // send token to backend to get user info
      navigate('Index');
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
