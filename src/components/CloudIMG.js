import React from 'react';
import { View, Image} from 'react-native';
import Cloudpng from '../assets/images/Cloudpng.png'

export default function CloudImg(props) {
  return (
    <View style={{width:100, height:80, marginBottom:45}}>
        <Image
            style={{width: '100%', height: '100%',}}
            source={Cloudpng}
            />
    </View>
  );

}