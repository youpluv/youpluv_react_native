import React from 'react';
import {View, Image} from 'react-native';
import { MyText } from './styles';

function TutorialComponent(props) {
    return (
      <View style={{alignItems:"center"}}>
        <MyText>{props.Text}</MyText>
        <View style={{height:300}}>
          <Image style={props.styleImage} source={props.Image}/>
        </View>
      </View>
    );
  }

export default TutorialComponent