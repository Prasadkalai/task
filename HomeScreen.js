/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {createBottomNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Header, SearchBar, Icon} from 'react-native-elements';
import {Card, Title, IconButton, color} from 'react-native-paper';
import Profile from './Profile';
import Cart from './Cart';
import New from './New';
/*import { Icon } from 'react-native-vector-icons';*/
class Home extends Component {
  render() {
    return (
      <ScrollView horizontal={false}>
        <View style={{backgroundColor: 'deepskyblue'}}>
          <StatusBar backgroundColor="skyblue" />

          <Header
            leftComponent={{icon: 'menu', color: 'black'}}
            centerComponent={{text: 'MUSIC', style: {color: 'black'}}}
            rightComponent={{icon: 'home', color: 'black'}}
          />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              borderWidth: 1,
              border: 1,
              borderColor: 'dodgerblue',
              margin: 10,
              padding: 20,
            }}>
              
            <View style={{justifyContent:'space-between',flexDirection:'row',paddingLeft:10}}>
              <Text style={{fontSize:30}}>HIPHOP AADHI</Text>
              <IconButton
                icon="share"
                onPress={() => {}}
              />
            </View>
            <Text style={{fontSize:20}}>subtitle</Text>
            
            <TouchableOpacity onPress={() => Alert.alert('hiphop')}>
              <View style={{margin: 30, alignItems: 'center'}}>
                <Image 
        style={{ width: 300, height: 250}} source={require('./android/hiphop.jpg')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.des}>Description for the content</Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              borderWidth: 1,
              border: 1,
              borderColor: 'dodgerblue',
              margin: 10,
              padding: 20,
            }}>
            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
              <Text style={styles.text}>AR RAHMAN</Text>
              <IconButton
                style={{justifyContent: 'center', alignItems: 'baseline'}}
                icon="share"
                onPress={() => {}}
              />
            </View>
            
            <TouchableOpacity onPress={() => Alert.alert('hiphop')}>
              <View style={{margin: 30, alignItems: 'center'}}>
                <Image style={{ width: 300, height: 250}} source={require('./android/rahman.jpg')} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              borderWidth: 1,
              border: 1,
              borderColor: 'dodgerblue',
              margin: 10,
              padding: 20,
            }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.text}>u1</Text>
              <IconButton
                style={{justifyContent: 'center', alignItems: 'baseline'}}
                icon="share"
                onPress={() => {}}
              />
            </View>
            
            <TouchableOpacity onPress={() => Alert.alert('hiphop')}>
              <View style={{margin: 30, alignItems: 'center'}}>
                <Image style={{ width: 300, height: 250}} source={require('./android/u1.jpg')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => (
        <View>
          <Icon style={{color: '#fff'}} name={'home'} size={25} />
        </View>
      ),
      tabBarLabel: 'Home',
      tabBarColor: '#348ceb',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: {backgroundcolor: 'blue'},
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: () => (
        <View>
          <Icon style={{color: 'white'}} name={'person'} size={25} />
        </View>
      ),
      tabBarLabel: 'Profile',
      fontSize: 10,
      tabBarColor: '#348ceb',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: {backgroundcolor: 'blue'},
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarIcon: () => (
        <View>
          <Icon style={{color: 'white'}} name={'menu'} size={25} />
        </View>
      ),
      tabBarLabel: 'Cart',
      tabBarColor: '#348ceb',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: {backgroundcolor: 'blue'},
    },
  },
  New: {
    screen: New,
    navigationOptions: {
      tabBarIcon: () => (
        <View>
          <Icon style={{color: 'white'}} name={'search'} size={25} />
        </View>
      ),
      tabBarLabel: 'Cart',
      tabBarColor: '#348ceb',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: {backgroundcolor: 'blue'},
    },
  },
});

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  },
  des:{
    fontSize:20,
    flex:5
  }
});
export default createAppContainer(TabNavigator);
