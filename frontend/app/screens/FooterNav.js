import React from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity,
  WebView
} from 'react-native';
import { TabNavigator} from 'react-navigation';
import {connect} from 'react-redux';


class FooterNav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    //below is tricky, NOT navigation, but props being passed into it by parent component
    const navigate = this.props.navigate;

    let cart = this.props.cart;

    if(cart.length === 0) {

      return (
        <View style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
          <Text style={styles.navText}>Your Cart</Text>
          </TouchableOpacity>
        </View>
      );
    } else {

      return (
        <View style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
          <Text style={styles.navText}>Your Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CheckOut')}>
          <Text style={styles.navText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  navText: {
    color: '#FFFFFF',
    fontSize: 18,
  }
});


const mapStateToProps = (state) => ({
  cart: state.cart
});


export default connect(mapStateToProps, null)(FooterNav);
