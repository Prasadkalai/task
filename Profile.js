import React ,{Component} from 'react';
import {View,Text} from 'react-native';

class Profile extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40}}>Profile</Text>
            </View>
        ); 
    }
}
export default Profile;