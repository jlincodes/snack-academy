import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'

import { verifyUser } from '../actions/user_actions.js'

class InitialScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {token: null, isLoaded: false};
    this.callVerifyUser = this.callVerifyUser.bind(this)
  }

  callVerifyUser(user){

    this.props.verifyUser(user)

  }

  async componentDidMount() {
    try{
      let token = await AsyncStorage.getItem('@snackOverflowAuthKey:key')

      this.setState({token: token, isLoaded: true});

      console.log('these are the props', this.props);

      let params = {user: {auth_key: this.state.token}}
      console.log(params);
      this.callVerifyUser(params)

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
    this.props.verifyUser({user: {auth_key: this.state.token}})

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



const mapDispatchToProps = (dispatch) => ({
  verifyUser: (user) => dispatch(verifyUser(user))
});



export default connect(null, mapDispatchToProps)(InitialScreen);
