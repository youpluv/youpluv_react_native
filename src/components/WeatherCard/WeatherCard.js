import React from "react";
import { View } from "react-native";

import { Container, Column } from "./styles";
import CardVertical from "./CardVertical/CardVertical";
import CardHorizontal from "./CardHorizontal/CardHorizontal";

export default function WeatherCard(props) {
  return (
    <Container style={props.containerStyle}>
      <Column value={4}>
        <CardVertical />
      </Column>
      <Column value={6}>
        <CardHorizontal />
        <CardHorizontal background="#F9D371" />
      </Column>
    </Container>
  );
}
