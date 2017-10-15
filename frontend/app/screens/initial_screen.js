import React from 'react';

function isLoggedIn() {

  let loggedIn = false;

  if(loggedIn) {
    return true;
  } else {
    return false;
  }
}

class InitialScreen extends React.Component {

  componentWillMount(){
    const { navigate } = this.props.navigate;
    if (isLoggedIn) {
      navigate('Index');
    } else {
      navigate('Signup');
    }
  }

  render(){
    return null;
  }

}
