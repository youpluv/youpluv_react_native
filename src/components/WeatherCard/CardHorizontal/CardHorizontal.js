import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Temperature,
  Image,
  Date,
  Line,
  TextDate,
  TextTemp,
  TextTempRange,
  TextDateMonth
} from "./styles";

import CloudSun from "../../../assets/images/CloudSun.png";

export default function CardHorizontal(props) {
  return (
    <Container background={props.background}>
      <Temperature>
        <View>
          <TextTemp>20°</TextTemp>
          <TextTempRange>18/23°c</TextTempRange>
        </View>
      </Temperature>
      <Image source={CloudSun} />

      <Line />

      <Date>
        <TextDate>Quinta-feira</TextDate>
        <TextDateMonth>Novembro, 14</TextDateMonth>
      </Date>
    </Container>
  );
}
