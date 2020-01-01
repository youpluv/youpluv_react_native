import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Temperature,
  ImageContainer,
  Date,
  Location,
  TextDate,
  TextLoc,
  TextTemp,
  TextTempRange,
  Pin,
  TextDateMonth
} from "./styles";

import locationIMG from "../../../assets/images/locationIMG.png";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

export default function CardVertical() {
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
          <ImageContainer>
            <LottieView
              autoPlay
              loop
              style={{
                height: 45
              }}
              source={require("../../../assets/animations/sunny.json")}
            />
          </ImageContainer>
        </Temperature>

        <Date>
          <TextDate>Quinta-feira</TextDate>
          <TextDateMonth>Novembro, 14</TextDateMonth>
        </Date>
      </Container>
    </LinearGradient>
  );
}
