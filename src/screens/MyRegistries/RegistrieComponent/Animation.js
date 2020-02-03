import React from 'react';

import LottieView from 'lottie-react-native';
import { Animations } from "../../../assets/animations";


export default function Animation(props) {
    
    const animate = ()=>{
        if(props.volume <= 6){
            return 'partlyShower'
        }else if ( props.volume <=12){
            return 'stormShowersDay'
        }else{
            return 'storm'
        }
    }
    return (
    <LottieView
        autoPlay
        loop
        style={{
            height: 75,
            width: 75
        }}
        source={Animations.WeatherAnimations[animate()]}
    />
  );
}
