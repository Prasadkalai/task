

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import HomeScreen from './HomeScreen';


class App extends Component {
  render() {
    return <AppContainer />
      
  }
}

const stacknav = createSwitchNavigator({
  STackscreenone: {
    screen: Login,
  },

  STackscreenTwo: {
    screen: HomeScreen,
  },
},
{
  initialRouteName:'STackscreenone'
}
);

const AppContainer =createAppContainer(stacknav)

export default App;
 