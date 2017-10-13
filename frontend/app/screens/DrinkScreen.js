
import React from 'react';
import { StyleSheet, Text, FlatList, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

import { requestAllProducts } from '../actions/product_actions.js'

import {connect} from 'react-redux';
import { selectDrinks } from '../reducers/selectors.js'

class DrinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Drinks', //refers to name of displayed button
  };

  componentWillMount() {
    this.props.requestAllProducts();
  }

  render() {

    //creating array of product objects
    let drinks = this.props.drinks

    return (
      <View>
        <FlatList
          data={drinks}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  drinks: selectDrinks(state.products)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProducts: () => dispatch(requestAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);
