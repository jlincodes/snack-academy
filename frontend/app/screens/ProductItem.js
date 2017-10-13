import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, AppRegistry, View, Button, Image } from 'react-native';


class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {

      return (
        <View>
          <Text>{this.props.product.name}</Text>
        </View>
      );
    }

  }

  export default ProductItem;
