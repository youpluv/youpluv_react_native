import React from 'react';
import {View, Image} from 'react-native';
import { MyText } from './styles';

function TutorialComponent(props) {
    return (
      <View style={{width:'100%', justifyContent:'center', alignItems:"center"}}>
        <MyText>{props.Text}</MyText>
        <Image style={props.styleImage} source={props.Image}/>
      </View>
    );
  }

export default TutorialComponent