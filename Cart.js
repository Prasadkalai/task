import React ,{Component} from 'react';
import {View,Text} from 'react-native';

class Cart extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40}}>search </Text>
            </View>
        ); 
    }
}

export default Cart;