import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


//importing screens
import Feed from '../screens/Feed';
import Settings from '../screens/Settings';

//setting up tabs
export const Tabs = TabNavigator({
  Feed: {
     screen: Feed, //screen name imported and defined from above
     navigationOptions: {
       tabBar: {
         label: 'Feed', //name on buttong
         icon : ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
       }
     }
   },
   Me: {
      screen: Me, //screen name imported and defined from above
      navigationOptions: {
        tabBar: {
          label: 'Me', //name on buttong
          icon : ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor}/>
        } //icon name is just a pic importing from icon 
      }
    }
})
