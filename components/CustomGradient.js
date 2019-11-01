import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomGradient(props) {
  return (
    <LinearGradient colors={['#A7E9FF', '#015D7B']} style={props.style}>
        {props.children}
    </LinearGradient>    
  );
}
