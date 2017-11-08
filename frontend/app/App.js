import React from 'react';
import { Provider } from 'react-redux';
import SimpleApp from './simpleApp.js';
import configureStore from './store/store.js';

import Cart from './screens/Cart.js';
import CheckOut from './screens/CheckOut.js';
import Confirmation from './screens/Confirmation.js';
import HeaderBanner from './screens/HeaderBanner.js';
import Signup from './screens/Signup.js';
import Splash from './screens/Splash.js';
import StripeLogoPage from './screens/StripeLogoPage.js'
import NewCardPage from './stripe_page.js';

import InitialScreen from './screens/initial_screen.js';
import { StackNavigator} from 'react-navigation';


const AppNavigator = StackNavigator(

  {
    Index: {
      screen: Splash
    },
    StripeLogoPage: {
      screen: StripeLogoPage
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
