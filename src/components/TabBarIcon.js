import React from 'react';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
  props.Ionicons ? <Ionicons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color || props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> : 
    <FontAwesome
    name={props.name}
    size={props.size}
    style={props.style}
    color={props.color || props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
  );
}
