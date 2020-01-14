import React from "react";
import { View } from "react-native";

import { Container, Column } from "./styles";
import CardVertical from "./CardVertical/CardVertical";
import CardHorizontal from "./CardHorizontal/CardHorizontal";

export default function WeatherCard(props) {
  const { data = [], region = "" } = props;
  return (
    <Container style={props.containerStyle}>
      <Column value={4}>
        <CardVertical data={data[0]} region={region} />
      </Column>
      <Column value={6}>
        <CardHorizontal data={data[1]} region={region} />
        <CardHorizontal background="#F9D371" data={data[2]} region={region} />
      </Column>
    </Container>
  );
}
