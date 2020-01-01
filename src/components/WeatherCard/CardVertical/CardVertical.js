import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Temperature,
  Image,
  Date,
  Location,
  TextDate,
  TextLoc,
  TextTemp,
  TextTempRange,
  Pin,
  TextDateMonth
} from "./styles";

import CloudSun from "../../../assets/images/CloudSun.png";
import locationIMG from "../../../assets/images/locationIMG.png";
import { LinearGradient } from "expo-linear-gradient";

export default function CardVertical(props) {
  return (
    <LinearGradient
      colors={["#fff", "#AADDE4", "#AADDE4"]}
      style={{ borderRadius: 10 }}
    >
      <Container>
        <Location>
          <Pin source={locationIMG} />
          <TextLoc>Guaratiba</TextLoc>
        </Location>

        <Temperature>
          <View style={{ alignItems: "center" }}>
            <TextTemp>20°</TextTemp>
            <TextTempRange>18/23°c</TextTempRange>
          </View>
          <Image source={CloudSun} />
        </Temperature>

        <Date>
          <TextDate>Quinta-feira</TextDate>
          <TextDateMonth>Novembro, 14</TextDateMonth>
        </Date>
      </Container>
    </LinearGradient>
  );
}
