import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomGradient(props) {
  const { colors = ["#A7E9FF", "#015D7B"] } = props;
  return (
    <LinearGradient colors={colors} style={props.style}>
      {props.children}
    </LinearGradient>
  );
}
