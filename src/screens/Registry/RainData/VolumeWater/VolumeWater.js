import React, {useEffect, useState} from 'react';
import { VolumeContainer } from './WaterStyled';
import { Animated } from "react-native";

const VolumeWater = (props)=> {

  const [animationHeight] = useState(new Animated.Value(0))

  const AnimatedVolumeContainer = Animated.createAnimatedComponent( VolumeContainer )

  useEffect(() => {
    Animated.timing(animationHeight, {
      toValue: 1,
      duration: 100,
    }).start();
    console.log(props.height)

  }, [props.height]);
  
  return (
    <AnimatedVolumeContainer style={{opacity: animationHeight}} height ={props.height} />
  );
}

export default VolumeWater