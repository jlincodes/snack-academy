

function isLoggedIn() {

  let loggedIn = true

  if(loggedIn) {
    return true
  } else {
    return false
  }
}

class InitialScreen extends React.Component {

  componentWillMount(){
    const { navigate } = this.props.navigate;
    if (loggedIn) {
      navigate('Index')
    } else {
      navigate('Signup')
    }
  }

  render(){
    return null;
  }

}
