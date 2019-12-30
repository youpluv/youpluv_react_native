import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import Cloudpng from '../assets/images/Cloudpng.png';
import {withNavigation} from 'react-navigation';

function CloudImg(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Cloud')}>
      <Image
        style={{width:90, height:82, marginBottom:20}}
        source={Cloudpng}
      />
    </TouchableOpacity>
  );
}
export default withNavigation(CloudImg)