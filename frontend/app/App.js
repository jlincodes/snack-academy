import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import FooterTabsBadge from './screens/Footer.js';
import DrinksScreen from './screens/DrinkScreen.js';
import FoodScreen from './screens/FoodScreen.js';
import NewCardPage from './stripe_page.js';



class Cart extends React.Component {

  render() {

    const { goBack, navigate } = this.props.navigation;
    let exampleCart = require('./images/cart.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .5, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Your Cart</Text>
        </View>
        <Image style={{flex: 5, width: 400}} source={exampleCart}/>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Index')}>
            <Text style={{fontSize: 22}}>Back to Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('CheckOut')}>
            <Text style={{fontSize: 22}}>Check Out</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}


class CheckOut extends React.Component {

  render() {
    const { goBack, navigate } = this.props.navigation;
    let checkOutImage = require('./images/confirmation_screen.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .5, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Confirm Order</Text>
        </View>
        <Image style={{flex: 5, width: 400}} source={checkOutImage}/>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Cart')}>
            <Text style={{fontSize: 22}}>View Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Confirmation')}>
            <Text style={{fontSize: 22}}>Confirm Order</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

//note menu
class Confirmation extends React.Component {

  render() {
    const { goBack, navigate } = this.props.navigation;
    let orderConfirmed = require('./images/order_confirmed.png');
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .5, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white'}}>Order Confirmed</Text>
        </View>
        <Image style={{flex: 5, width: 400}} source={orderConfirmed}/>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Index')}>
            <Text style={{fontSize: 22}}>Back to Menu</Text>
          </TouchableOpacity>
        </Container>
      </View>
    );
  }
}



//routes


const Menu = TabNavigator({
  Drinks: {
    screen: DrinksScreen
  },
  Food: {
    screen: FoodScreen
  }
},
{
  tabBarPosition: 'top',
  tabBarOptions: {
     activeTintColor: 'red',  // Color of tab when pressed
     inactiveTintColor: '#b5b5b5',
     labelStyle: {
        fontSize: 31,
      },
      backgroundColor: 'white'
   }
}
);



//if flexing, the way to change heights of header and footer is by changing the height of the component between them
class SimpleApp extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <NewCardPage />
        <HeaderBanner style={{flex: 1}}/>
        <View style={{backgroundColor: 'white', flex: 8}}>
          <Menu />
        </View>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigate('Cart')}>
              <Text style={{color: 'black',  fontSize: 18}}>Your Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('CheckOut')}>
              <Text style={{color: 'black', fontSize: 18}}>Check Out</Text>
            </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

//this must be after simple app or wont work
//top level navigator
const AppNavigator = StackNavigator(

  {
    Index: {
      screen: SimpleApp
    },
    Cart: {
      screen: Cart
    },
    CheckOut: {
      screen: CheckOut
    },
    Confirmation: {
      screen: Confirmation
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

  }
);

const ActionBar = StackNavigator({
  Index: {
    screen: CheckOut
  },
  Confirmation: {
    screen: Confirmation
  }
});







class HeaderBanner extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: 'red'}}>
          <Title style={{color: 'white', fontSize: 30,  justifyContent: 'center'}}>SnackAcademy</Title>
      </Header>
    );
  }
}




export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
