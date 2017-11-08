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
import {connect} from 'react-redux';

import { addItemToCart } from '../actions/cart_actions.js';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUSDConversion(cents){
    var dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

  render() {
    let product = this.props.product;
    let name = product.name;
    let description = product.description;
    let price = this.handleUSDConversion(product.price);
    return (
      <View>
        <View style={styles.menuItem}>
          <Image
            style={styles.image}
            source={{uri: product.img_url}} />
          <Text style={styles.text}>
            {`${name}\n${description}\n${price}`}
          </Text>
        </View>

        <Button
          title='add item to cart'
          onPress={() => this.props.addItemToCart(product)}/>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 10
    },
    image: {
      height: 100,
      width: 100,
      marginRight: 30,
      marginLeft: 15
    },
    text: {
      fontSize: 16,
      color: '#555555'
    }
  });


  //testing
  const mapStateToProps = (state) => ({
    state: state
  });


  const mapDispatchToProps = (dispatch) => {
    return (
      {
        addItemToCart: (item) => dispatch(addItemToCart(item))
      }
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
