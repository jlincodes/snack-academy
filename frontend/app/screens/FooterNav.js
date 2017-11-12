import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  WebView
} from 'react-native';
import { TabNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import { Container } from 'native-base';

class FooterNav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    console.log('these are the props', this.props);
    let cart = this.props.cart;

    // return (
    //   <View />
    // );

    if(cart.length === 0) {

      return (
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
          <Text style={styles.navText}>Your Cart</Text>
          </TouchableOpacity>
        </Container>
      );
    } else {

      return (
        <Container style={
          {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
          alignItems: 'center', backgroundColor: '#1485CC'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
          <Text style={styles.navText}>Your Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CheckOut')}>
          <Text style={styles.navText}>Check Out</Text>
          </TouchableOpacity>
        </Container>
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



const mapDispatchToProps = (dispatch) => ({
  navigation: (route) => dispatch(navigation(route))
});


export default connect(mapStateToProps, mapDispatchToProps)(FooterNav);
