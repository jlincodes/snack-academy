


import React from 'react';
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

import NewCardPage from '../stripe_page.js';


class StripeLogoPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {timePassed: false}
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ timePassed: true });}, 2000);
  }

  componentDidUpdate() {
      const { navigate } = this.props.navigation;
      navigate('NewCardPage')
  }


  render() {

      return(
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{ width: '70%', height: '18%'}} source={{uri: 'https://res.cloudinary.com/dql6mlrow/image/upload/v1510123211/stripe_logo.png'}} />
        </View>
      );
    }

}

export default StripeLogoPage
