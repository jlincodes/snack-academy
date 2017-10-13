
import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

import {connect} from 'react-redux';


class DrinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Drinks', //refers to name of displayed button
  };

  componentWillMount() {
    this.props.requestAllProducts();
  }

  render() {

    let products = this.props.products

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

const mapStateToProps = (state) => ({
  products: selectDrinks(state.products),
  food: selectFood(state.products)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProducts: () => dispatch(requestAllProducts())
});

export default connect(null, mapDispatchToProps)(DrinksScreen);
