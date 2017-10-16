import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

export default class InitialScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token: null, isLoaded: false};
  }

  async componentDidMount() {
    try{
      let token = await AsyncStorage.getItem('@snackOverflowAuthKey:key')
      console.log('below is token!', token);
      this.setState({token: token, isLoaded: true});
      console.log('states token', this.state.token);
      const { navigate } = this.props.navigation;

      if (this.state.token) {
        // send token to backend to get user info
        navigate('SimpleApp');
      } else {
        navigate('Signup');
      }
    }
    catch(e){
        console.log('caught error', e);
        // Handle exceptions
    }
  }


  componentWillUpdate(){
    const { navigate } = this.props.navigation;

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
