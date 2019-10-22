import React, {Component} from 'react';
import { 
  TextInput, 
  View,
  StyleSheet 
} from 'react-native';

export default class Input extends Component{
  render(){
    return(  
      <View>
        <TextInput style={style.boxInput}></TextInput>
      </View>
    )
  }
}

const style = StyleSheet.create({
  boxInput: {
    backgroundColor: 'blue',
    width: 200, 
    borderRadius: 50, 
    height: 50,
    padding: 15,
    color: 'white',
    fontSize: 20
  }
})
