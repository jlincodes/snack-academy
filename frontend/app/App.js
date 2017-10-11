import React from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';

import DrinksScreen from './screens/DrinkScreen.js';
import FoodScreen from './screens/FoodScreen.js';
import Cart from './screens/Cart.js';
import CheckOut from './screens/CheckOut.js';
import Confirmation from './screens/Confirmation.js';
import HeaderBanner from './screens/HeaderBanner.js';

import NewCardPage from './stripe_page.js';

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
     activeTintColor: '#000000',
     inactiveTintColor: '#b5b5b5',
     labelStyle: {
        fontSize: 18,
      },
   }
}
);

// if flexing, the way to change heights of header and footer is by
// changing the height of the component between them
class SimpleApp extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <NewCardPage/>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{backgroundColor: '#f7f7f7', flex: 8}}>
          <Menu />
        </View>
        <Container style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#1485CC'}}>
            <TouchableOpacity onPress={() => navigate('Cart')}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Your Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('CheckOut')}>
              <Text style={{color: '#FFFFFF', fontSize: 18}}>Check Out</Text>
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

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
