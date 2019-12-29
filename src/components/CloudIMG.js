import React from 'react';
import { View, Image} from 'react-native';
import Cloudpng from '../assets/images/Cloudpng.png'

export default function CloudImg(props) {
  return (
    <View style={props.style}>
        <Image
            style={{width: 70, height: 70, marginBottom:30}}
            source={Cloudpng}
            />
    </View>
  );

}