import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image } from 'react-native';


class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' }
  };
  render() {
    let doritosPic = require('../images/doritos.jpg');
    return (
      <View style={{width: 193, height: 390}}>
        <Text>Some Food</Text>
        <Image source={doritosPic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default FoodScreen;
