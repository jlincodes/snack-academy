

import React from 'react';
import { StyleSheet, Text, FlatList, AppRegistry, ScrollView, View, Button, Image } from 'react-native';

import {connect} from 'react-redux';
import { selectFood } from '../reducers/selectors.js'

import ProductItem from './ProductItem.js'

class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food', //refers to name of displayed button
  };


  render() {

    //creating array of product objects
    let food = this.props.food

    return (
      <View>
        <FlatList
          data={food}
          renderItem={({item}) => <ProductItem key={item.id} product={item}/>}
        />
      </View>
    );
  }
}

// <ProductItem key={product.id} product={item.price}/>

const mapStateToProps = (state) => ({
  food: selectFood(state.products)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProducts: () => dispatch(requestAllProducts())
});



export default connect(mapStateToProps, mapDispatchToProps)(FoodScreen);
