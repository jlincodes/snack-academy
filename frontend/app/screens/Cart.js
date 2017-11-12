import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';

import HeaderBanner from './HeaderBanner.js';
import CartItem from './CartItem.js';

class Cart extends React.Component {
  render() {
    let cart = this.props.cart;
    const { goBack, navigate } = this.props.navigation;
    console.log('these are the cart props', this.props);
    if (cart.length === 0) {

      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <HeaderBanner style={{flex: 1}}/>
          <View style={{flex: 9, alignItems: 'center', justifyContent: 'space-around'}}>
            <Image style={{width: 180, height: 180 }} resizeMode="cover" source={{uri: "https://res.cloudinary.com/dql6mlrow/image/upload/v1510175745/comic-characters-2026645_640_aya8y3.png"}} />
            <Text style={{fontSize: 28}}>Cart is Empty</Text>
          </View>
          <Container style={
            {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: '#1485CC'}}>
            <TouchableOpacity onPress={() => navigate('SimpleApp')}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
            </TouchableOpacity>
          </Container>
        </View>
      );

    } else {

      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <HeaderBanner style={{flex: 1}}/>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 18}}>
              Your Cart
            </Text>
          </View>
          <View style={styles.cartHead}>
            <Text style={styles.cartHeadText}>Item Name</Text>
            <Text style={styles.cartHeadText}>Price</Text>
          </View>
          <View style={{flex: 9}}>
            <FlatList
              data={cart}
              renderItem={({item}) => <CartItem style={styles.text} product={item}/>}
              keyExtractor={(item, index) => index}
            />
          </View>
          <Container style={
            {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: '#1485CC'}}>
            <TouchableOpacity onPress={() => navigate('SimpleApp')}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Back to Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('CheckOut')}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Check Out</Text>
            </TouchableOpacity>
          </Container>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cartHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30
  },
  cartHeadText: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    color: '#555555'
  }
});

const mapStateToProps = (state) => ({
  cart: state.cart
});


export default connect(mapStateToProps, null)(Cart);
