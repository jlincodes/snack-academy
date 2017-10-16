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
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import HeaderBanner from './screens/HeaderBanner.js';

// import { Provider } from 'react-redux';
import DrinksScreen from './screens/DrinkScreen.js';
import FoodScreen from './screens/FoodScreen.js';

import { requestAllProducts } from './actions/product_actions.js';
// import configureStore from './store/store.js';
import { connect } from 'react-redux';


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

    this.props.requestAllProducts();
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
          <View style={{backgroundColor: '#f7f7f7', flex: 10}}>
            <Menu />
          </View>
          <Container style={
              {flex: 1, flexDirection: 'row', justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: '#1485CC'}}>
                <TouchableOpacity onPress={() => navigate('Cart')}>
                  <Text style={styles.menuTabText}>Your Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('CheckOut')}>
                  <Text style={styles.menuTabText}>Check Out</Text>
                </TouchableOpacity>
              </Container>
            </View>
          );

    } else {
      return (
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: 'grey'}}>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  menuTabText: {
    color: '#FFFFFF',
    fontSize: 18,
  }
});



const mapDispatchToProps = (dispatch) => ({
  requestAllProducts: () => dispatch(requestAllProducts())
});



export default connect(null, mapDispatchToProps)(SimpleApp);
