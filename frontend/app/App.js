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
import { StackNavigator, TabNavigator} from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import { Provider } from 'react-redux';

import DrinksScreen from './screens/DrinkScreen.js';
import FoodScreen from './screens/FoodScreen.js';
import Cart from './screens/Cart.js';
import CheckOut from './screens/CheckOut.js';
import Confirmation from './screens/Confirmation.js';
import HeaderBanner from './screens/HeaderBanner.js';

import NewCardPage from './stripe_page.js';

import { getProducts } from './api_util/api_util.js';
import configureStore from './store/store.js';

import Signup from './screens/Signup.js';

import InitialScreen from './screens/initial_screen.js';

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
     inactiveTintColor: '#666666',
     inactiveBackgroundColor: '#bfbfbf',
     labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: '#d3d3d3'
      },
      indicatorStyle: {
        backgroundColor: '#1485CC'
      }
   }
}
);

// if flexing, the way to change heights of header and footer is by
// changing the height of the component between them
class SimpleApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {loaded: false};
  }

  componentWillMount() {
    getProducts();
  }

  componentDidMount(){
    this.setState({loaded: true});
  }


  render() {
    const { navigate } = this.props.navigation;

    if(this.state.loaded) {

      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <HeaderBanner style={{flex: 1}}/>
          <View style={{backgroundColor: '#f7f7f7', flex: 8}}>
            <Menu />
          </View>
          <Container style={
              {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: '#1485CC'}}>
                <TouchableOpacity onPress={() => navigate('Cart')}>
                  <Text style={{color: '#FFFFFF', fontSize: 18}}>Your Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('CheckOut')}>
                  <Text style={{color: '#FFFFFF', fontSize: 18}}>Check Out</Text>
                </TouchableOpacity>
              </Container>
            </View>
          );

    } else {
      return (
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: 'red'}}>
        </View>
      );
    }
  }
}

//this must be after simple app or wont work
//top level navigator

// Signup: {
//   screen: Signup
// }

const AppNavigator = StackNavigator(

  {
    Index: {
      screen: InitialScreen
    },
    NewCardPage: {
      screen: NewCardPage
    },
    SimpleApp: {
      screen: SimpleApp
    },
    Signup: {
      screen: Signup
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


export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
