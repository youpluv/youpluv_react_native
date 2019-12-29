import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  const { style, name, size, color, focused, type = "fontAwesomes" } = props;
  const Icon = {
    ionicons: Ionicons,
    fontAwesomes: FontAwesome
  }[type];
  return (
    <Icon
      name={name}
      size={size}
      style={style}
      color={color || focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
