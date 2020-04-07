import React, { Component } from 'react';
import {View,StyleSheet, Text, TouchableOpacity,StatusBar,TextInput,Button,Image, ImageBackground,} from 'react-native';

class Login extends Component {
 
 render(){
    return (
      <View style={{justifyContent:'center',flex:1,backgroundColor:'#45aaf2',padding:16}}>
       <StatusBar backgroundColor="skyblue" />
    
        <Image style={{alignItems:'center',justifyContent:'center',width:350,height:100}} source={require('./android/logom.png')} />
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'skyblue', fontSize: 40,justifyContent:'center'}}>Login</Text>
      </View>
      <TextInput style={{height:40,backgroundColor:'skyblue',margin:10,borderRadius:40}}
     
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={text => this.setState({ text })}
      />
      <TextInput
      style={{height:40,backgroundColor:'skyblue',borderRadius:40,margin:10}}
     
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
        
      />
      <View style={styles.button}>
      <Button style={{borderRadius:40}}  title="Login" color="#e93766" onPress={()=>this.props.navigation.navigate('STackscreenTwo')} />
  </View>
    </View>
  );
}
};

const styles = StyleSheet.create({  
  button: {    
    borderRadius:40,  
    margin: 10,  
    paddingHorizontal:100
  }  
})
export default Login;
