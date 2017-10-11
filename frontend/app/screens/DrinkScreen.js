
import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

class DrinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Drinks', //refers to name of displayed button
  };
  render() {
    let coffeePic = require('../images/coffee.jpg')
    return (
      <View style={{width: 193, height: 390}}>
        <Text>Some Drinks</Text>
        <View>
          <Image source={coffeePic} style={{width: 193, height: 110}}/>
        </View>
      </View>
    );
  }
}

export default DrinksScreen;
